from flask import Flask, jsonify, request
import boto3
from flask_cors import CORS

from bedrock_anthropic import *

app = Flask(__name__)
CORS(app)

# Initialize the DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Survey_Results')  # Replace with your DynamoDB table name

# name, age, needs, restrictions, activity level, budget

@app.route('/')
def home():
    return "Backend is running!"

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Data from Python backend"})

@app.route('/add-item', methods=['POST'])
def add_item():
    data = request.json  # Get JSON data from the request
    
    # Validate required keys
    required_keys = ['name', 'age', 'needs', 'restrictions', 'allergies', 'activity', 'environmental']
    if not all(k in data for k in required_keys):
        return jsonify({"error": "Invalid data, missing fields: " + ", ".join(set(required_keys) - data.keys())}), 400
    
    # Create the item to be added to DynamoDB
    item = {
        'name': data['name'],
        'age': data['age'],
        'needs': data['needs'],
        'restrictions': data['restrictions'],
        'allergies': data['allergies'],
        'activity': data['activity'],
        'environmental': data['environmental']
    }

    # Put the item in the DynamoDB table
    try:
        table.put_item(Item=item)
        return jsonify({'message': 'Item added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    
@app.route('/get-item', methods=['GET'])
def get_item():
    name = request.args.get('name') 
    print(f"Received request for name: {name}")

    if not name:
        return jsonify({'error': 'Name parameter is required'}), 400

    try:
        # Query the table using the name as the primary key
        response = table.query(
            KeyConditionExpression=boto3.dynamodb.conditions.Key('name').eq(name)
        )

        # Return the items found for the given name
        if 'Items' in response:
            return jsonify({'items': response['Items']}), 200
        else:
            return jsonify({'message': 'No items found for the given name'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get_recipes', methods=['POST'])
def get_recipes():
    data = request.get_json()

    query = data.get('query')

    if not query:
        return jsonify({"error": "No query provided"}), 400
    
    recipes = anthropic_recipe_generator(query)

    return jsonify({"recipes": recipes}), 200

if __name__ == '__main__':
    app.run(debug=True)
    

