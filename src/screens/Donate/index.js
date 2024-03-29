import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:COLORS.app_bg,
        margin:5
    },
    childContainer:{
         backgroundColor:COLORS.inactive_tab,
         borderRadius:8,
         flexDirection:'column',
         padding:10
    },
    txtHeader:{
        color:COLORS.txtColor,
        fontWeight:'600',
        fontSize:20
    },
    txtAppeal:{
        color:COLORS.txtColor3,
        fontWeight:'500',
        fontSize:14,
        marginTop:15,
    },
    viewRadioButton:{
        flexDirection:'column',
        marginTop:15
    },
    txtRadioButton:{
        color:COLORS.black,
        fontSize:12
    },
    viewChildRadioButton:{
        flexDirection:'row',
        alignItems:'center'
    },
    txtInput:{
        backgroundColor:COLORS.white,
        borderWidth:1,
        marginTop:10,
        borderRadius:5,
        padding:8,
        color:COLORS.black,
        borderColor:COLORS.borderColor
    },
    txtInputHalf:{
        flex:0.5,
        backgroundColor:COLORS.white,
        borderWidth:1,
        marginTop:10,
        borderRadius:5,
        marginEnd:10,
        paddingStart:5,
        padding:8,
        color:COLORS.black,
        borderColor:COLORS.borderColor
    },
    txtMailingList:{
        color:COLORS.txtColor2,
        fontWeight:'300',
        fontSize:14,
        marginTop:10
    },
    btnPayPal:{
        width:'100%',
        backgroundColor:COLORS.active_tab,
        borderRadius:8,
        fontWeight:'800',
        color:COLORS.white,
        padding:12,
        textAlign:'center',
        marginTop:20,
        marginBottom:15,
        overflow: 'hidden'
    }
  
})

export {styles}