import boto3

# Initialize a session using your AWS credentials
session = boto3.Session(
    aws_access_key_id='ASIASFDVSUKJUT2QKEEN',
    aws_secret_access_key='PjFHsHnl3gv/tfW7CdmkPixdK5ZbO5yVvHloqLZh',
    aws_session_token='IQoJb3JpZ2luX2VjEKz//////////wEaCXVzLWVhc3QtMSJHMEUCIAUwUUy+Hh2g9vpwavOwgERfn5z58aaXBdBa7WFNdB3DAiEAkLTCAAsjzw6mv9fV77tlVD/hsdU+eCnAUAqRgT1m9gwqogII9f//////////ARACGgwxNDg0MjI5NTk3NjMiDKh8ADcL06PbeBx4oSr2AUStRJfxbdApKCJ/ewDPKqHdBZF6GQu1Hlb5TOmIIvtlUDV2j+/lXYer8KX8tIsRkM8xrs9vZgrnSywmmmSHzjz2b0fC2W2MFNA5+Sei2EAmVjrgW8ebceyvpY9pf0CcjmWD3iCeXs1OtDSHovETPegw1zFmPYbLOYrk3DKFnMyHO6ML+GNNbd7VT4/alroMHDQzdG/+p1xh0sVd4OeW0+oAIjIBylvhXL4hiBgcvkW8XDCEO43K/oBWEOpOYdqCxdy1huQZRoXuzbn0h71YJHz0njkJ26AN4y8TamygtTNI4H7rt9SP575V04Du1sy+ioBHafVTtDDyo4a4BjqdAdbnVOxzkUsIXrKBMhCxvUmrqbyvKOu5SalDDTpCGPeLdaCYWyvcWetgLThMUu/DftOcpvIRUcduE7C/IUoVwZ9HcjKfQLUvweVvjah2x/MfwaYBymG4/2dow70bz0rZ4MwNTwTqaKbxw9ZQe06uLf+xl8UnlsPx0+YVjtMvCJ8iKrHOwcNEnAEM+YmiWTipnznMp9U+xXUJ0jjj+Gg=',
    region_name='us-west-2'  # e.g., 'us-west-2'
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
