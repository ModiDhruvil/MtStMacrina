import React, { useEffect,useState } from "react";
import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import { styles } from ".";
import RenderHtml from 'react-native-render-html';
import CustomProgress from "../../utils/CustomProgress";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

export default function News({navigation}) {
    const [dataNews,setDataNews] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        ApiNews()
    }, [])

    const ApiNews =  () => {
        setLoading(true)
        return new Promise(() => {
            axios
                .get('posts?',{
                    _fields:'title,content,id'
                })
                .then((response) => {
                    setDataNews(response);
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                });
        });
    };
 

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=> navigation.navigate('NewsDetail',{
            itemTitle:item.title.rendered,
            itemDescription:item.content.rendered
            }) }>
            <View styles={styles.container}>
                <View style={styles.newsList}>
                    <Text style={styles.txtTitle}>
                        {item.title.rendered}
                    </Text>

                    <RenderHtml
                        contentWidth={Dimensions.get('window').width}
                        source={{ html: item.content.rendered }}
                        tagsStyles={{ a: { color: '#58585A', textDecorationLine: 'none', fontSize: 14, lineHeight: 25 }, p: { lineHeight: 25, color: '#58585A', fontSize: 14, marginBottom: 16, marginTop: 16 } }}
                    />
                </View>

            </View>
        </TouchableOpacity>

    );

    if (loading) {
        return (<View style={styles.loading}>
            <CustomProgress />
        </View>);
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>

                <FlatList
                    data={dataNews ? dataNews.data : null}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        )
    }
}