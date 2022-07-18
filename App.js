import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import { LogBox } from "react-native";
import Splash from './src/screens/Splash/Splash';
import axios from 'axios';
axios.defaults.baseURL = 'https://sistersofstbasil.org/wp-json/wp/v2/';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])



export default function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {splash ? <Splash /> : <AppNavigation />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})