# import boto3
# import json

# #Create the connection to Bedrock
# bedrock = boto3.client(
#     service_name='bedrock',
#     region_name='us-west-2', 
    
# )

# bedrock_runtime = boto3.client(
#     service_name='bedrock-runtime',
#     region_name='us-west-2', 
    
# )

# # Let's see all available Anthropic Models
# # available_models = bedrock.list_foundation_models()

# # for model in available_models['modelSummaries']:
# #   if 'anthropic' in model['modelId']:
# #     print(model)


# # Define prompt and model parameters
# prompt_data = """Write me a healthy recipe with high protein that is vegetarian"""

# # body = {"prompt": "Human: " + prompt_data + " \\nAssistant:",
# #         "max_tokens_to_sample": 300, 
# #         "temperature": 1,
# #         "top_k": 250,
# #         "top_p": 0.999,
# #         "stop_sequences": ["\\n\\nHuman:"],
# #         "anthropic_version": "bedrock-2023-05-31"}
# body = json.dumps({
#   "max_tokens": 256,
#   "messages": [{"role": "user", "content": "Write me a healthy recipe with high protein that is vegetarian"}],
#   "anthropic_version": "bedrock-2023-05-31"
# })

# # body = json.dumps(body) # Encode body as JSON string

# modelId = 'anthropic.claude-3-sonnet-20240229-v1:0' 
# accept = 'application/json'
# contentType = 'application/json'

# #Invoke the model
# response = bedrock_runtime.invoke_model(body=body.encode('utf-8'), # Encode to bytes
#                                  modelId=modelId, 
#                                  accept=accept, 
#                                  contentType=contentType)

# response_body = json.loads(response.get('body').read())
# print(response_body.get('completion'))


# #We can also call the Anthropic Claude models via the streaming API

# response = bedrock_runtime.invoke_model(body=body.encode('utf-8'), # Encode to bytes
#                                  modelId=modelId, 
#                                  accept=accept, 
#                                  contentType=contentType)

# response_body = json.loads(response.get("body").read())
# print(response_body.get("content"))
# # for event in response['body']:
# #     data = json.loads(event['chunk']['bytes'])
# #     print(data)

import boto3
import json
import base64

# Create a BedrockRuntime client
bedrock_runtime = boto3.client('bedrock-runtime')

# with open("cat.png", "rb") as image_file:
#     encoded_string = base64.b64encode(image_file.read())
#     base64_string = encoded_string.decode('utf-8')

payload = {
    "modelId": "anthropic.claude-3-sonnet-20240229-v1:0",
    "contentType": "application/json",
    "accept": "application/json",
    "body": {
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1000,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Write me a recipe that is high protein and vegetarian."
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

# Process the response
response_body = json.loads(response['body'].read()) #.decode('utf-8')
print(response_body.get("content"))