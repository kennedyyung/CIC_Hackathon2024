import boto3
import json

# Create a BedrockRuntime client
bedrock_runtime = boto3.client('bedrock-runtime')

def anthropic_recipe_generator(query):
    prompt_data = "Provide me with recipes that fulfill the following query:" + query

    payload = {
        "modelId": "anthropic.claude-3-sonnet-20240229-v1:0",
        "contentType": "application/json",
        "accept": "application/json",
        "body": {
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 2000,
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": prompt_data
                        }, 
                        {
                            "type": "text",
                            "text": "Use a JSON format with the keys recipe_name, description, ingredients, and instructions."
                        }
                    ]
                }
            ]
        }
    }
    # Convert the payload to bytes
    body_bytes = json.dumps(payload['body']).encode('utf-8')

    # Invoke the model
    response = bedrock_runtime.invoke_model(
        body=body_bytes,
        contentType=payload['contentType'],
        accept=payload['accept'],
        modelId=payload['modelId']
    )

    response = json.loads(response['body'].read()).get('content')[0]
    return response["text"]

print(anthropic_recipe_generator("Vegeterian meals and high protein"))