import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import SurveyPage from './SurveyPage';

export default function LoginPage() {

    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("Survey"); // Replace 'NextPage' with the name of your next screen
      };

    const icon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
    </svg>
  `;
    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <SvgXml xml={icon} width="24" height="24" fill="#0e1b0e" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Welcome back</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="#4e974e"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#4e974e"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#4e974e"
          secureTextEntry
        />
      </View>
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <TouchableOpacity style={styles.button}onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.signUp}>New to us? Sign up</Text>
      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fcf8',
    fontFamily: 'Epilogue, "Noto Sans", sans-serif',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fcf8',
    padding: 8,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  title: {
    color: '#0e1b0e',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#e7f3e7',
    borderRadius: 16,
    paddingHorizontal: 16,
    color: '#0e1b0e',
    fontSize: 16,
    borderColor: 'transparent',
  },
  forgotPassword: {
    color: '#4e974e',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#19e619',
    borderRadius: 9999,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#0e1b0e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUp: {
    color: '#4e974e',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
    textDecorationLine: 'underline',
  },
  spacer: {
    height: 20,
    backgroundColor: '#f8fcf8',
  },
});