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
    }
    
})

export {styles}