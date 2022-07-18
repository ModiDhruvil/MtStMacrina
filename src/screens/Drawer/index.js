import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.drawerColor,
        paddingHorizontal:10
    },
    appLogoImg:{
        width:100,
        height:140,
        marginVertical:20

    },
    txtDrawerSub:{
        color:COLORS.txtColor,
        fontSize:14,
        fontWeight:'500',
        marginVertical:5
    },
    txtDrawer:{
        color:COLORS.txtColor,
        fontSize:16,
        fontWeight:'500',
        marginVertical:10,
        width:'90%'
    },
    rightArrowImg:{
        width:20,
        height:20,
        resizeMode:'contain'
    },
    subView:{
        flexDirection:'column',
        margin:10,
    }
    
   
})

export {styles}