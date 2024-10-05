from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Backend is running!"

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Data from Python backend"})

if __name__ == '__main__':
    app.run(debug=True)
