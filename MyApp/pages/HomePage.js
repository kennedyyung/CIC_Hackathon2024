import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list'
import RecipeCard from '../Components/RecipeCard';
import sampleImage from '../img/spaghetti.jpg';
import { Button } from 'react-native';
import axios from 'axios';

export default function HomePage() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');

    const getRecipes = async () => {
        try {
            const response = await axios.post('http://34.216.207.88:5000/api/get_recipes', { query });

            setRecipes(response.data.recipes); // Set the recipes state with the response
            setError(''); // Clear any previous errors
        } catch (error) {
            console.error(error);
            setError(error.response?.data.error || 'Something went wrong'); // Set error message
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder="Enter your recipe query"
                    value={query}
                    onChangeText={setQuery}
                    style={styles.inputField}
                    placeholderTextColor="#000"
                />
                <Button title="Get Recipes" onPress={getRecipes} />
            </View>
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
            {recipes.length > 0 && (
                <View style={{ marginTop: 20 }}>
                    <Text>{recipes}</Text>
                    {/* {recipes.map((recipe, index) => (
                        <Text key={index}>{recipe}</Text>
                    ))} */}
                </View>
            )}
            <RecipeCard
                time="25 minutes"
                image={sampleImage}// Example image URL
                title="Quinoa Burgers"
                calorieCount="250"
                description="A quick and easy pasta recipe."
            />
            <RecipeCard
                time="25 minutes"
                image={sampleImage}// Example image URL
                title="Delicious Pasta"
                calorieCount="250"
                description="A quick and easy pasta recipe."
            />
            <RecipeCard
                time="25 minutes"
                image={sampleImage}// Example image URL
                title="Delicious Pasta"
                calorieCount="250"
                description="A quick and easy pasta recipe."
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 56,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#e7f3e7",
        borderRadius: 16,
        paddingHorizontal: 16,
        color: "#0e1b0e",
        fontSize: 16,
        borderColor: "transparent",
    },
    inputField: {
        height: 35,
        paddingHorizontal: 15,
        color: "#000000",
        borderRadius: 14,
        borderColor: "#000000",
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10
    }
});