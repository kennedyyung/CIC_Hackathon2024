from flask import Flask, jsonify, request
from bedrock_anthropic import *

app = Flask(__name__)

@app.route('/')
def home():
    return "Backend is running!"

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Data from Python backend"})

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
    
