import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import CustomDrawerContent from '../Drawer/CustomDrawerContent'
const Drawer = createDrawerNavigator();



export default function HomeMian() {
    return (
        <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
                headerTitleStyle: {
                    fontSize: 14
                },
                headerTitle:''
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}