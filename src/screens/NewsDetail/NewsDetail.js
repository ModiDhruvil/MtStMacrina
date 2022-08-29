import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { styles } from ".";
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';

const NewsDetail = ({ route }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.txtTitle}>
                    {route.params.itemTitle}
                </Text>

                <RenderHtml
                    contentWidth={Dimensions.get('window').width}
                    source={{ html: route.params.itemDescription }}
                    tagsStyles={{ a: { color: '#58585A', textDecorationLine: 'none', fontSize: 14, lineHeight: 25 }, p: { lineHeight: 25, color: '#58585A', fontSize: 14, marginBottom: 16, marginTop: 16 } }}
                />
            </ScrollView>

        </View>
    )
}

export default NewsDetail

