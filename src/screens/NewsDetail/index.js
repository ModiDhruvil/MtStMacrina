import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:10,
    },
    txtTitle:{
     color:COLORS.txtColor1,
     fontSize:14,
     fontWeight:'600',
     padding:5
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
  
})

export {styles}