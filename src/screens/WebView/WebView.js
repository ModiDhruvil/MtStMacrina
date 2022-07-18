import React, { useEffect } from 'react'
import WebView from 'react-native-webview'

const WebViewDisplay = ({navigation,route}) => {

    useEffect(()=>{
        navigation.setOptions({ title: route.params.title })
    },[route.params.title ])
    return (
        <WebView source={{ uri: route.params.url }} />
    )
}

export default WebViewDisplay
