import boto3

# Initialize a session using your AWS credentials
session = boto3.Session(
    
)

# Creeate DynamoDB resource
dynamodb = session.resource('dynamodb')

# Reference to the Survey_Results table
table = dynamodb.Table('Survey_Results')

response = table.scan()
items = response.get('Items', [])

# Delete each item
for item in items:
    table.delete_item(
        Key={
            'name': item['name'],  # Partition key
            'age': item['age']     # Sort key
        }
    )
   
print(f"Deleted items")

# Example data to insert with the correct types
items = [
    {'name': 'Alice', 'age': '28', 'needs': 'Yoga Classes', 'restrictions': 'None', 'activity level': 'Moderate', 'budget': 100},
    # {'name': 'Bob', 'age': 35, 'needs': 'Personal Trainer', 'restrictions': 'Gluten-Free', 'activity level': 'High', 'budget': 200},
    # {'name': 'Charlie', 'age': 42, 'needs': 'Nutrition Advice', 'restrictions': 'Vegetarian', 'activity level': 'Low', 'budget': 150},
    # {'name': 'David', 'age': 30, 'needs': 'Group Fitness', 'restrictions': 'None', 'activity level': 'Moderate', 'budget': 75},
    # {'name': 'Eva', 'age': 26, 'needs': 'Pilates', 'restrictions': 'None', 'activity level': 'Moderate', 'budget': 120},
    # {'name': 'Frank', 'age': 50, 'needs': 'Weight Loss', 'restrictions': 'Dairy-Free', 'activity level': 'Low', 'budget': 80},
    # {'name': 'Grace', 'age': 22, 'needs': 'Meal Prep', 'restrictions': 'None', 'activity level': 'High', 'budget': 60},
    # {'name': 'Henry', 'age': 38, 'needs': 'Strength Training', 'restrictions': 'None', 'activity level': 'Moderate', 'budget': 180},
    # {'name': 'Isla', 'age': 27, 'needs': 'Wellness Coaching', 'restrictions': 'None', 'activity level': 'High', 'budget': 250},
    # {'name': 'Jake', 'age': 45, 'needs': 'Physical Therapy', 'restrictions': 'None', 'activity level': 'Low', 'budget': 90}
]

# Add items to the table
for item in items:
    # Ensure types are correct
    # item['age'] = int(item['age'])  # Ensure age is an integer
    # item['budget'] = int(item['budget'])  # Ensure budget is an integer
    response = table.put_item(Item=item)
    # print(response)
    # print(f"Added item: {item}")

print("All items have been added successfully.\n\n")

# Attempt to retrieve an item using both partition key and sort key
try:
    response = table.get_item(
        Key={
            'name': 'Alice',  # Partition key
            'age': '28'         # Sort key
        }
    )

    item = response.get('Item')
    if item:
        print("Retrieved item:", item)
    else:
        print("Item not found.")
except Exception as e:
    print("Error retrieving item:", e)
