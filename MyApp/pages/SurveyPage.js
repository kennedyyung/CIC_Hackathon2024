import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list'

export default function SurveyPage() {
    const [selected, setSelected] = React.useState("");
    const [name, setName] = useState('');

    const [selectedGoal, setSelectedGoal] = useState("");
    const [selectedDiet, setSelectedDiet] = useState("");
    const [selectedAllergies, setSelectedAllergies] = useState("");
    const [selectedActivity, setSelectedActivity] = useState("");
    const [selectedImpact, setSelectedImpact] = useState("");
  
    const dietaryPreference = [
        {key:'1', value:'Vegetarian'},
        {key:'2', value:'Vegan'},
        {key:'3', value:'Gluten Free'},
        {key:'4', value:'Halal'},
        {key:'5', value:'Dairy Free'},
        {key:'6', value:'Pescetarian'},
        {key:'7', value:'High Protein'},
    ]

    const allergies = [
        {key:'1', value:'Nuts'},
        {key:'2', value:'Peanuts'},
        {key:'3', value:'Shellfish'},
        {key:'4', value:'Treenuts'},
    ]

    const goals = [
        {key:'1', value:'None'},
        {key:'2', value:'Weight Loss'},
        {key:'3', value:'Weight Gain'},
    ]

    const activityLevel = [
        {key:'1', value:'None'},
        {key:'2', value:'Low'},
        {key:'3', value:'Moderate'},
        {key:'4', value: 'High'},
    ]

    const environmentalImpact = [
        {key:'1', value:'Less H2O consumption'},
        {key:'2', value:'Less CO2 consumption'},
    ]

    



return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Diet Preferences</Text>
      </View>
      <Text style={styles.subText}>
        We'll use this information to personalize your experience.
      </Text>


      <View style={styles.inputContainer}>
                <Text style={styles.label}>Age</Text>
                <TextInput
                    placeholder="Enter your age"
                    style={styles.inputField}
                    placeholderTextColor="#000"
                    value={name}
                    onChangeText={setName}
                />
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.label}>Health Goals</Text>
        <SelectList 
        setSelected={setSelectedGoal} 
        data={goals} 
        save="value"
        />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dietary Preference</Text>
        <SelectList 
        setSelected={setSelectedDiet} 
        data={dietaryPreference} 
        save="value"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Allergies</Text>
        <SelectList 
        setSelected={setSelectedAllergies} 
        data={allergies} 
        save="value"
        /> 
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Activity Level</Text>
        <SelectList 
        setSelected={setSelectedActivity} 
        data={activityLevel} 
        save="value"
        /> 
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Environment Impact</Text>
        <SelectList 
        setSelected={setSelectedImpact} 
        data={environmentalImpact} 
        save="value"
        /> 
      </View>



      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save and Continue</Text>
      </TouchableOpacity>

      <View style={styles.bottomSpace}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fcf8',
    fontFamily: 'Epilogue, Noto Sans',
    padding: 16,
  },
  header: {
    flexDirection: 'cols',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  headerText: {
    color: '#0e1b0e',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    color: '#0e1b0e',
    fontSize: 16,
    paddingBottom: 8,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: '#0e1b0e',
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#d0e7d0',
    borderWidth: 1,
    backgroundColor: '#f8fcf8',
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 15,
    color: '#0e1b0e',
  },
  checkIcon: {
    backgroundColor: '#f8fcf8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderLeftWidth: 1,
    borderColor: '#d0e7d0',
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    backgroundColor: '#19e619',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#0e1b0e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 20,
    backgroundColor: '#f8fcf8',
  },
  ageContainer: {
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
  inputField: {

    height: 50,
    paddingHorizontal: 15,
    color: '#f8fcf8',
    borderRadius: 14,
    borderColor: '#000000',
    borderWidth: 1 ,
  },
});

