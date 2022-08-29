import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:COLORS.app_bg
    },
    viewCalender:{
        backgroundColor:COLORS.white,
        borderRadius:10,
        margin:10,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
})

export {styles}