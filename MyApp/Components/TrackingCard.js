import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, imageSource } from 'react-native';

const TrackingCard = (props) => {
    const { image, title, style, time, description, calorieCount, amount } = props;
    return (
            <View style={styles.cardContent}>
                <View style={styles.rowContainer}>
                    <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{amount}</Text>
                <View style={styles.rowContainer}>



                </View>
                <Text style={styles.sub}>{description}</Text>
                </View>

                                
                </View>


            </View>
    );
};
const styles = StyleSheet.create({
    image: {
        width: 100, // Set your desired width
        height: 100, // Set your desired height
        borderRadius: 10, // Optional: add border radius for aesthetics
        marginRight: 15
    },
    cardContent: {
        flexDirection: 'column',
        paddingLeft: 15,
        width: "100%",
        paddingBottom: 10,
        marginBottom:20,
        backgroundColor: '#d0e7d0',
        paddingRight: 10,
        borderRadius: 20

    },
    smallText: {
        paddingHorizontal: 15
    },
    title: {
        fontSize: 19,
        paddingBottom: 2,
        fontWeight: 'bold',
        paddingTop: 10,

    },
    text: {
        fontSize: 16,
        color:'black',
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
        backgroundColor: '#d0e7d0',
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


export default TrackingCard;