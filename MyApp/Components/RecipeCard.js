import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, imageSource } from 'react-native';

const RecipeCard = (props) => {
    const { image, title, style, elevation, distance, time, sideText, difficulty, calorieCount } = props;
    return (
        <View style={{ backgroundColor: props.color, ...style }}>
            <View style={styles.cardContent}>
                <Text style={styles.sideText}>{time}</Text>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.sideText}>Serves: {calorieCount} calories</Text>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{difficulty}</Text>
                    </TouchableOpacity>

                        <Text style={styles.smallText}>{distance} km</Text>
                        <Text style={styles.smallText}>{elevation} m</Text>

                </View>
                <Image 
                    source={imageSource} // Use the image prop directly
                    style={styles.image} // Add styling for the image if needed
                />

                <Text style={styles.sub}>{sideText}</Text>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        width: 100, // Set your desired width
        height: 100, // Set your desired height
        borderRadius: 10, // Optional: add border radius for aesthetics
        marginVertical: 10, // Optional: add margin for spacing
    },
    cardContent: {
        flexDirection: 'column',
        paddingLeft: 15,
        height: 80,
        width: "100%",
        paddingBottom: 10
    },
    smallText: {
        paddingHorizontal: 15
    },
    title: {
        fontSize: 19,
        paddingBottom: 2,
        fontWeight: 'bold',
        paddingTop: 5
    },
    text: {
        fontSize: 16,
    },
    sub: {
        fontSize: 11,

        top: '4%',
    },
    sideRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'

    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    button: {
        backgroundColor: 'black',
        justifyContent: 'center',
        // width: 45,
        height: 25,
        borderRadius: 7

    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 3
    }
});


export default RecipeCard;