import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash'
import CustomDrawerContent from '../screens/Drawer/CustomDrawerContent';
import WebView from '../screens/WebView/WebView';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
          headerTitleStyle:{
          fontSize:14
         }
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="WebView" component={WebView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
