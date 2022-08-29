import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:COLORS.app_bg
    },
    childContainer:{
        backgroundColor:COLORS.app_color,
        margin:10,
        padding:8,
        alignItems:'center',
        marginTop:20,
        borderRadius:10,
    },
    txtLabel:{
        color:COLORS.white,
        fontSize:22,
        fontWeight:'500',
        margin:10
    },
    txtDescription:{
        color:COLORS.txtColor1,
        fontSize:15,
        fontWeight:'300',
        margin:10
    },
    txtTime:{
        width:'100%',
        textAlign:'right',
        color:COLORS.txtColor2,
        fontSize:13,
        fontWeight:'400',
        padding:10
      
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