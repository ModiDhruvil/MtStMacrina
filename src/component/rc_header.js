
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Image,
} from 'react-native';
import { Color, Fonts, sizeFont, sizeWidth, Images } from '@theme';
 
import { CustomIcon } from '@component';

export default function CustomHeader(props) {
  return (
    <View style={[styles.container, props.container]}>
      {/*  Left icon view*/}
      <View style={styles.leftViewStyle}>
        {props.leftIconName && (
          <TouchableOpacity
            style={[styles.tabButton, props.tabButtons]}
            onPress={() => (props.leftClick ? props.leftClick() : '')}>
            <Image
              source={props.leftImageSource}
              style={[styles.leftImageStyle, props.leftImageStyles]}
            />
          </TouchableOpacity>
        )}
      </View>

      {/*  Center title view*/}
      <View style={styles.centerViewStyle}>
      
          <View style={styles.titleTextView}>
            <Text style={[styles.headerText, props.headerTextLabel]}>{props.name}</Text>
          </View>
       
      </View>


      <View style={styles.rightViewStyle}>
       
          <View style={[styles.rightTabButton]} >
          
          <TouchableOpacity
            style={[styles.rightTabButton, props.tabButtons]}
            onPress={() => (props.onPressAdd ? props.onPressAdd() : '')}>
         
             
              <Image
                style={{
                  height: sizeWidth(11),
                  width: sizeWidth(12.5),
                  resizeMode: 'contain',
                  left: 2,
                }}
                source={Images.profile_image}
              />
            
          </TouchableOpacity>
          </View>

     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: sizeWidth(20),
    backgroundColor: Color.background,

    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
    flexDirection: 'row',
  },
  leftImageStyle: {
    height: sizeWidth(6),
    width: sizeWidth(6),
    resizeMode: 'contain',
     
    alignSelf:"flex-start",
 
  },
  rightViewStyle: {
    flex: 0.2,
    marginRight: sizeWidth(1),
    //paddingVertical: 5,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: Platform.OS == 'ios ' ? sizeWidth(1) : sizeWidth(0),
  },
  centerViewStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  leftViewStyle: {
    flex: 0.2,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: sizeWidth(2),
  },
  headerWrap: {
    height: '100%',
    width: '100%',
    backgroundColor: Color.white,
    alignItems: 'center',
    flexDirection: 'row',
  },
  tabButton: {
    height: sizeWidth(12),
    width: sizeWidth(12),
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: Color.white,
   // borderRadius: 360,
  },

  rightTabButton: {
    height: sizeWidth(12),
    width: sizeWidth(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "transparent", //Color.white,
    borderRadius: 360,
  },
  leftImageStyles:{
    height: sizeWidth(5),
    width: sizeWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: sizeFont(18),
    color:Color.text,
    fontWeight:"bold",
    alignContent:"center",
    justifyContent:"center",
    alignSelf:"center",
    // fontFamily: Platform.OS == "android" ? fonts.proximareg : Fonts.montserratRegular,
  },
  titleTextView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
