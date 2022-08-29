import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
 
 
//import navigator
import {AppContainer} from '@navigator';

 
 

export default class App extends React.Component {
 

  

  render() {
   

    return (
   
          <SafeAreaProvider>
            <AppContainer /> 
           
          </SafeAreaProvider>
       
    );
  }
}
 
