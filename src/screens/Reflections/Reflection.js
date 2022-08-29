import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, useWindowDimensions, Dimensions, ScrollView } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import { styles } from ".";
import { COLORS } from "../../constants";
import CustomProgress from "../../utils/CustomProgress";
import HTML from 'react-native-render-html';



export default function Reflection(props) {
    const [dataReflection, setDataReflection] = useState()
    const [loading, setLoading] = useState(false)
    const contentWidth = useWindowDimensions().width;


    useEffect(() => {
        callReflectionApi()
    }, [])

    const callReflectionApi = async () => {
        setLoading(true)
        return new Promise(() => {
            axios
                .get('mobile_slider')
                .then((response) => {
                    setDataReflection(response.data.data.response)
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error);
                });
        });
    };


    if (loading) {
        return (<View style={styles.loading}>
            <CustomProgress />
        </View>);
    } else {
        return (
            <View style={styles.container}>

                <SliderBox
                    images={dataReflection !== undefined ? dataReflection.img_urls : []}
                    sliderBoxHeight={Dimensions.get('window').height / 3.5}
                    dotColor={COLORS.active_tab}
                    inactiveDotColor={COLORS.inactive_tab}
                    autoplay
                />
                <ScrollView>

                    <View style={styles.childContainer}>
                        <Text style={styles.txtLabel}>
                            {dataReflection !== undefined ? dataReflection.page_title : ''}
                        </Text>

                        {/* <Text style={styles.txtDescription}>
                            {dataReflection !== undefined ? dataReflection.page_content : ''}
                        </Text> */}
                        <HTML
                            source={{ html: dataReflection !== undefined ? dataReflection.page_content : '' }}
                            contentWidth={contentWidth}
                        />


                    </View>

                </ScrollView>
            </View>
        )
    }


}
