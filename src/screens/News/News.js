import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from 'react-native'
import * as rssParser from 'react-native-rss-parser';
import axios from "axios";
import { styles } from ".";

export default function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        getRSSFeed()
    }, [])

    const getRSSFeed = async () => {
        const res = await axios.get('https://sistersofstbasil.org/feed/', {
            responseType: 'text'
        });
        try {
            const parsed = await rssParser.parse(res.data);
            setNews(parsed.items)
        } catch (err) {
            console.log(err)
        }
    }

    const renderItem = ({ item }) => (
        <View styles={styles.container}>
            <View style={styles.newsList}>
                <Text style={styles.txtTitle}>
                     {item.title}
                </Text>

                <Text style={styles.txtDescription}>
                     {item.description}
                </Text>
            </View>

        </View>
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>

            <FlatList
                data={news}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    )
}