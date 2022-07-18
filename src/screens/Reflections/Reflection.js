import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import { styles } from ".";
import { COLORS } from "../../constants";

const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",

]

export default function Reflection() {

    useEffect(() => { 
        getTopBanners()
    }, [])

    const getTopBanners = async () =>{

    }

    return (
        <View style={styles.container}>
            <SliderBox
                images={images}
                sliderBoxHeight={Dimensions.get('window').height / 3.5}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor={COLORS.active_tab}
                inactiveDotColor={COLORS.inactive_tab}
                autoplay
            />

            <View style={styles.childConatiner}>
                <Text style={styles.txtLable}>
                    Daily Devotional
                </Text>

                <Text style={styles.txtDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sagittis, pharetra mi nibh vestibulum malesuada scelerisque amet. Imperdiet ac tellus amet euismod. Ut elit mi scelerisque id. Justo, sed lobortis pharetra, tincidunt faucibus eget suspendisse molestie aliquam.
                    {'\n'}
                    {'\n'}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sagittis, pharetra mi nibh vestibulum malesuada scelerisque amet. Imperdiet ac tellus amet euismod. Ut elit mi scelerisque id. Justo, sed lobortis pharetra, tincidunt faucibus eget suspendisse molestie aliquam.
                </Text>
                {/* <Text style={styles.txtTime}>
                    05:00
                </Text> */}
            </View>

        </View>
    )
}
