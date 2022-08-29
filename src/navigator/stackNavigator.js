import React from 'react';

import { StyleSheet, Pressable} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
 
 

 
import * as Screen from '@screens';

const Stack = createStackNavigator();

 
function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation, route}) => ({
          headerStyle: styles.headerStyle,
          headerTransparent: false,
          headerTitleAlign: 'center',
          headerTitle: "UserList",
          headerTitleStyle: styles.headerTitleStyle,
          headerShown: true,
       
        })}>
          
           <Stack.Screen
          name="UserList"
          component={Screen.UserList}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="DetailPage"
          component={Screen.DetailPage}
          options={{headerShown: false}}
        />
         
             
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#ffffff",
    shadowOpacity: 0,
    shadowOffset: {height: 0},
    elevation: 0,
  },

  headerTitleStyle: {
   
    textTransform: undefined,
  },
   
   
});
