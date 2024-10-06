// import React from 'react';
// import { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { SvgXml } from 'react-native-svg';
// import { Picker } from '@react-native-picker/picker';
// import { SelectList } from 'react-native-dropdown-select-list'
// import RecipeCard from '../Components/RecipeCard';
// import sampleImage from '../img/spaghetti.jpg';

// export default function HomePage() {
//     return(
//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.title}>Search Recipes</Text>
//                 <TextInput
//                     placeholder="Type here"
//                     style={styles.inputField}
//                     placeholderTextColor="#000"
//                 />

//             </View>
//              <RecipeCard
//                 time="25 minutes"
//                 image={sampleImage}// Example image URL
//                 title="Quinoa Burgers"
//                 calorieCount="250"
//                 description="A quick and easy pasta recipe."
//             />
//                          <RecipeCard
//                 time="25 minutes"
//                 image={sampleImage}// Example image URL
//                 title="Delicious Pasta"
//                 calorieCount="250"
//                 description="A quick and easy pasta recipe."
//             />
//                          <RecipeCard
//                 time="25 minutes"
//                 image={sampleImage}// Example image URL
//                 title="Delicious Pasta"
//                 calorieCount="250"
//                 description="A quick and easy pasta recipe."
//             />
//         </View>

//         );
//     };

//     const styles = StyleSheet.create({
//         container: {
//             marginTop: 56,
//         },
//         input: {
//             flex: 1,
//             height: 56,
//             backgroundColor: "#e7f3e7",
//             borderRadius: 16,
//             paddingHorizontal: 16,
//             color: "#0e1b0e",
//             fontSize: 16,
//             borderColor: "transparent",
//           },
//           inputField: {
//             height: 35,
//             paddingHorizontal: 15,
//             color: "#000000",
//             borderRadius: 14,
//             borderColor: "#000000",
//             borderWidth: 1,
//             marginHorizontal: 10,
//             marginBottom:15,
//           },
//           title: {
//             fontWeight: 'bold',
//             fontSize:16,
//             marginLeft: 10
//           }
//     });


import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, Alert, Pressable } from 'react-native';
import RecipeCard from '../Components/RecipeCard';
import sampleImage from '../img/spaghetti.jpg';

export default function HomePage() {
    const [modalVisible, setModalVisible] = useState(false); // Modal state

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Search Recipes</Text>
                <TextInput
                    placeholder="Type here"
                    style={styles.inputField}
                    placeholderTextColor="#000"
                />
            </View>
            
            <RecipeCard
                time="25 minutes"
                image={sampleImage}
                title="Quinoa Burgers"
                calorieCount="250"
                description="A quick and easy pasta recipe."
                onPress={() => setModalVisible(true)} // Pass the function to show the modal
            />
            <RecipeCard
                time="25 minutes"
                image={sampleImage}
                title="Delicious Pasta"
                calorieCount="250"
                description="A quick and easy pasta recipe."
                onPress={() => setModalVisible(true)} // Pass the function to show the modal
            />
            <RecipeCard
                time="25 minutes"
                image={sampleImage}
                title="Delicious Pasta"
                calorieCount="250"
                description="A quick and easy pasta recipe."
                onPress={() => setModalVisible(true)} // Pass the function to show the modal
            />

            {/* Modal component */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    // ... existing styles
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
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
        marginBottom:15,
      },
      title: {
        fontWeight: 'bold',
        fontSize:16,
        marginLeft: 10,
        marginTop:45
      },
});
