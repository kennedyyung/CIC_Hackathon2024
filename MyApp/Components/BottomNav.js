import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image } from 'react-native'
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { SvgXml } from 'react-native-svg';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const PersonIcon = () => {
    const xml = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="7" r="4" fill="#000" />
            <path d="M4 21v-2c0-5 8-7 8-7s8 2 8 7v2" fill="none" stroke="#000" strokeWidth="2" />
        </svg>
    `;

    return <SvgXml xml={xml} width="100" height="100" />;
};

// const Tab = createBottomTabNavigator();



const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Activities"
      barStyle={{ backgroundColor: 'black' }}
    >
      <Tab.Screen name='Login' component={LoginPage} options={{ tabBarIcon: PersonIcon }} />
    </Tab.Navigator>
  );

}

export default BottomNav;