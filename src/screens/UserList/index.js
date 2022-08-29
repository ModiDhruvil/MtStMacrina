import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

import {
  Images,
  Color,
  sizeWidth,
} from "@theme";
import {
  CustomHeader
} from "@component";

import styles from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
 
 
 
const UserList = (props) => {
   
  const [number, onChangeNumber] = React.useState(null);
 
  useEffect(() => {
    
  }, []);
 
 
  function renderSeparatorView() {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: Color.lightsky,
        }}
      />
    );
  }

  function headerView() {
    return (
      <View style={{ backgroundColor: Color.white, borderRadius:sizeWidth(2)}}>
       <CustomHeader  leftImageSource={Images.add_more}  leftIconName={true} name={"TOURX"}/> 
       <View><Text style={styles.DiscoverTxt}>{"Discover"}</Text></View>
       <View><Text style={styles.newWord}>{"A New World"}</Text></View>
       </View>
    );
  }
  
  const navigateView=()=>
  { 
    
    props.navigation.navigate('DetailPage')
  }
 
  
  return (
    
    <View style={{ flex: 1, padding: sizeWidth(2),backgroundColor:Color.white }}>
      <SafeAreaView  >
        <StatusBar />
        {headerView()}
      
   
          <View>
            <View style={[styles.container]}>
              <View style={{flexDirection:"row"}}>
            <View style={styles.serchview}>
            <Image
                style={{
                  height: sizeWidth(7),
                  width: sizeWidth(8.5),
                  resizeMode: 'contain',
                  left: 2,
                  tintColor:Color.text,
                  marginTop:sizeWidth(2),
                 
                }}
                source={Images.search}
              />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Search Places"
             
              placeholderTextColor={Color.text}
            />
            
            </View>

            <View style={styles.filterButton}>
            <Image
                style={{
                  height: sizeWidth(7),
                  width: sizeWidth(7),
                  resizeMode: 'contain',
                 
                  tintColor:Color.text,
                  marginTop:sizeWidth(2),
                  alignSelf:'center',
                 tintColor:Color.white,
                 marginBottom:sizeWidth(2)
              
                }}
                source={Images.serach_filter}
              />
            </View>
            </View>

           
         

            </View>

<View style={{flexDirection:"row"}}>
            <TouchableOpacity style={styles.image1} onPress={navigateView}>
            <ImageBackground
                style={{
                  height: sizeWidth(85),
                  width: sizeWidth(75),
                  resizeMode: 'cover',
                  left: -5,
                  borderRadius:sizeWidth(10),
                 
                  marginTop:sizeWidth(-1),
                 
                }}
                imageStyle={{ 
                  borderRadius:sizeWidth(5),
                  
                }}

                source={Images.image5}
              >
                <ImageBackground style={styles.layputView}
                 source={Images.gimage}
                 imageStyle={{ borderRadius:sizeWidth(5),
                  width:"100%",}}
                >
                  <View style={styles.tarkyView}> 
                    <Text style={styles.text}>{"Turkey"}</Text>
                    </View>
                    <View style={styles.capadocial_View}>
                      <Text style={styles.capadocia_text}>{"Cappadocia"}</Text>
                      <View style={styles.imageroundshap}>
                      <Image
                style={styles.copaciaImag}
                source={Images.cart}
              />
                      </View>
                    </View>
                    <View><Text style={styles.number}>$50.00</Text></View>
                  </ImageBackground>
              </ImageBackground>
            </TouchableOpacity>
            <View style={[styles.image1,{marginLeft:sizeWidth(5),marginTop:sizeWidth(40)}]}>
            {/* <Image
                style={{
                  height: sizeWidth(80),
                  width: sizeWidth(65),
                  resizeMode: 'cover',
                  left: -5,
                  borderRadius:sizeWidth(5),
                 
                  marginTop:sizeWidth(-5),
                 
                }}
                source={Images.image3}
              /> */}
              <ImageBackground
                style={{
                  height: sizeWidth(85),
                  width: sizeWidth(65),
                  resizeMode: 'cover',
                  left: -5,
                  borderRadius:sizeWidth(5),
                 
                  marginTop:sizeWidth(-5),
                 
                }}
                imageStyle={{ borderRadius:sizeWidth(5)}}

                source={Images.image2}
              >
                <ImageBackground style={styles.layputView}
                 source={Images.gimage}
                 imageStyle={{ borderRadius:sizeWidth(5),
                  width:"100%",}}
                >
                  <View style={styles.tarkyView}> 
                    <Text style={styles.text}>{"Turkey"}</Text>
                    </View>
                    <View style={styles.capadocial_View}>
                      <Text style={styles.capadocia_text}>{"Cappadocia"}</Text>
                      <View style={styles.imageroundshap}>
                      <Image
                style={styles.copaciaImag}
                source={Images.cart}
              />
                      </View>
                    </View>
                    <View><Text style={styles.number}>$50.00</Text></View>
                  </ImageBackground>
              </ImageBackground>
              
            </View>
            </View>
             
            
          </View>
     
        
       
      </SafeAreaView>
   
      <View style={styles.FooterView}>
          <View style={styles.footerlist}>
          <View style={styles.homeround}>
                      <Image
                          style={styles.home_imageFoot}
                          source={Images.home}
                        />
          </View>
          <View>
                      <Image
                          style={styles.imageFoot}
                          source={Images.compass}
                        />
          </View>
          <View>
                      <Image
                          style={styles.imageFoot}
                          source={Images.truck}
                        />
          </View>
          <View>
                      <Image
                          style={styles.imageFoot}
                          source={Images.user}
                        />
          </View>
          </View>
   </View>
    </View>
    
 
  );

}


//Connect Everything
export default UserList;



