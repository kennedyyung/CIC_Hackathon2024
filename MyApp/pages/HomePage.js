import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list'
import RecipeCard from '../Components/RecipeCard'

export default function SurveyPage() {
    return(
        <View style={styles.container}>
            <View>

            </View>
             <RecipeCard
                time="25 minutes"
                imageSource="require('../img/spaghetti.jpg')"// Example image URL
                title="Delicious Pasta"
                difficulty="Easy"
                calorieCount="Super "
                distance={0.5} // Distance in km
                elevation={10} // Elevation in meters
                sideText="A quick and easy pasta recipe."
                color="#f8f8f8" // Background color for the card
            />
        </View>

        );
    };

    const styles = StyleSheet.create({
        container: {
            marginTop: 56,
        }
    });