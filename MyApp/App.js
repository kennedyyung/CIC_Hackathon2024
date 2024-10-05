import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useState } from "react";
import {useEffect } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "./pages/LoginPage";
import SurveyPage from "./pages/SurveyPage";
import HomePage from "./pages/HomePage";

const Stack = createNativeStackNavigator();


  export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
            >
                <Stack.Screen 
                name="Login" 
                component={LoginPage}
                options={{ headerShown: false }} 
                />
                <Stack.Screen 
                name="Survey" 
                component={SurveyPage}
                options={{ headerShown: false }} 
                />
                <Stack.Screen 
                name="Home" 
                component={HomePage}
                options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff5d7",
    alignItems: "center",
    justifyContent: "center",
  },
});
