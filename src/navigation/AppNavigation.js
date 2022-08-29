import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WebView from '../screens/WebView/WebView';
import NewsDetail from '../screens/NewsDetail/NewsDetail';
import HomeMian from '../screens/Home/HomeMain';

const Stack = createNativeStackNavigator();



export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeMain" screenOptions={{ headerShown: true}}>
        <Stack.Screen name="HomeMain" component={HomeMian} options={{ headerShown: false ,headerTitle: ''}} />
        <Stack.Screen name="WebView" component={WebView} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} options={{ headerTitle: 'News Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
