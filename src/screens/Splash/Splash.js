import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, StatusBar } from 'react-native'
import { styles } from '.';
import { IMAGES } from "../../constants";


export default function Splash() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground
                source={IMAGES.splash}
                resizeMode="cover"
                style={styles.splashBG} />
        </View>
    )
}

