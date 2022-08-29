import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    newsList:{
        flexDirection:'column',
        margin:10,
        padding:10,
        backgroundColor:COLORS.inactive_tab,
        borderRadius:10,
    },
    imageNews:{
        width:120,
        height:120,
        borderRadius:10,
        resizeMode:'contain'
    },
    txtTitle:{
     color:COLORS.txtColor1,
     fontSize:14,
     fontWeight:'600',
     padding:5
    },
    txtDescription:{
        color:'black',
        fontSize:14,
        fontWeight:'300',
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