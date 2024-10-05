from flask import Flask, jsonify, request
import boto3
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Initialize the DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('YourTableName')  # Replace with your DynamoDB table name

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
    item = {
        'id': data['id'],  # Assuming you're sending an 'id' key
        'name': data['name'],  # Assuming you're sending a 'name' key
        # Add other attributes as necessary
    }
    
    # Put the item in the DynamoDB table
    try:
        table.put_item(Item=item)
        return jsonify({'message': 'Item added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

