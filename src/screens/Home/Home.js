import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { ICONS, COLORS } from '../../constants';
import Reflection from '../Reflections/Reflection';
import Pilgrimage from '../Pilgrimage/Pilgrimage';
import News from '../News/News';

export default function Home({ navigation }) {




    return (
        <Tab.Navigator
            initialRouteName="Reflections"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: true,
                tabBarLabelPosition: 'below-icon',
                tabBarActiveTintColor: COLORS.active_tab,
                tabBarInactiveTintColor: COLORS.inactive_tab,
                tabBarStyle: {
                    height: 65,
                    backgroundColor: COLORS.app_color,
                    paddingBottom: 5,
                    paddingTop: 5,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }

            }}

        >
            {/* Reflections */}
            <Tab.Screen
                name="Reflections"
                options={{
                    tabBarLabel: 'Reflections',
                    unmountOnBlur:true,
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ICONS.reflaction}
                            tintColor={color}
                            style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: color }}
                        />
                    )
                }}
                component={Reflection} />

            {/* Pilgrimage Tab */}
            <Tab.Screen
                name="Pilgrimage"
                options={{
                    tabBarLabel: 'Calendar',
                    unmountOnBlur:true,
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ICONS.pilgrimage}
                            tintColor={color}
                            style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: color }}
                        />
                    )
                }}
                component={Pilgrimage} />
            {/* News Tab */}
            <Tab.Screen
                name="News"
                options={{
                    tabBarLabel: 'News',
                    unmountOnBlur:true,
                    tabBarIcon: ({ color }) => (
                        <Image
                            tintColor={color}
                            source={ICONS.news}
                            style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: color }}
                        />
                    )
                }}
                component={News} />


            {/* <Tab.Screen
                name="Donate Tab"
                options={{
                    tabBarLabel: 'Donate',
                    unmountOnBlur:true,
                    tabBarIcon: ({ color }) => (
                        <Image
                            tintColor={color}
                            source={ICONS.donate}
                            style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: color }}
                        />
                    )
            
                }}  
                  component={Donate}            
             /> */}
        </Tab.Navigator>
    )
}

