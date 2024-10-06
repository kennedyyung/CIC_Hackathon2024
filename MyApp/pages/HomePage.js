import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list'
import RecipeCard from '../Components/RecipeCard';
import sampleImage from '../img/spaghetti.jpg';

export default function HomePage() {
    return(
        <View style={styles.container}>
            <View>

            </View>
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
        }
    });