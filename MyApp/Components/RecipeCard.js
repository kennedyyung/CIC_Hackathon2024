// import React from 'react'
// import { Text, View, StyleSheet, Image, TouchableOpacity, Button, imageSource } from 'react-native';

// const RecipeCard = (props) => {
//     const { image, title, style, time, description, calorieCount } = props;
//     return (
//         <View style={{ backgroundColor: props.color, ...style }}>
//             <View style={styles.cardContent}>
//                 <View style={styles.rowContainer}>
//                     <View>
//                 <Text style={styles.sideText}>{time}</Text>

//                 <Text style={styles.title}>{title}</Text>
//                 <Text style={styles.sideText}>Serves: {calorieCount} calories</Text>
//                 <View style={styles.rowContainer}>
//                     <TouchableOpacity style={styles.button}>
//                         <Text style={styles.buttonText}>Cook now</Text>
//                     </TouchableOpacity>


//                 </View>
//                 <Text style={styles.sub}>{description}</Text>
//                 </View>
//                 <Image 
//                     source={image} // Use the image prop directly
//                     style={styles.image} // Add styling for the image if needed
//                 />
                                
//                 </View>


//             </View>
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     image: {
//         width: 100, // Set your desired width
//         height: 100, // Set your desired height
//         borderRadius: 10, // Optional: add border radius for aesthetics
//         marginRight: 15
//     },
//     cardContent: {
//         flexDirection: 'column',
//         paddingLeft: 15,
//         width: "100%",
//         paddingBottom: 10,
//         marginBottom:20
//     },
//     smallText: {
//         paddingHorizontal: 15
//     },
//     title: {
//         fontSize: 19,
//         paddingBottom: 2,
//         fontWeight: 'bold',
//         paddingTop: 5
//     },
//     text: {
//         fontSize: 16,
//     },
//     sub: {
//         fontSize: 11,

//         top: '4%',
//     },
//     sideRowContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignSelf: 'center'

//     },
//     rowContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',

//     },

//     button: {
//         backgroundColor: '#d0e7d0',
//         justifyContent: 'center',
//         // width: 45,
//         height: 25,
//         borderRadius: 7

//     },
//     buttonText: {
//         color: 'white',
//         alignSelf: 'center',
//         fontSize: 12,
//         fontWeight: 'bold',
//         paddingHorizontal: 3
//     }
// });


// export default RecipeCard;


import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const RecipeCard = (props) => {
    const { image, title, style, time, description, calorieCount, onPress } = props;

    return (
        <View style={{ backgroundColor: props.color, ...style }}>
            <View style={styles.cardContent}>
                <View style={styles.rowContainer}>
                    <View>
                        <Text style={styles.sideText}>{time}</Text>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.sideText}>Serves: {calorieCount} calories</Text>
                        <View style={styles.rowContainer}>
                            <TouchableOpacity style={styles.button} onPress={onPress}>
                                <Text style={styles.buttonText}>Cook now</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.sub}>{description}</Text>
                    </View>
                    <Image 
                        source={image} 
                        style={styles.image} 
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    cardContent: {
        flexDirection: 'column',
        paddingLeft: 15,
        width: "100%",
        paddingBottom: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 19,
        paddingBottom: 2,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    sub: {
        fontSize: 11,
        top: '4%',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#d0e7d0',
        justifyContent: 'center',
        height: 25,
        borderRadius: 7,
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 3,
    },
});

export default RecipeCard;
