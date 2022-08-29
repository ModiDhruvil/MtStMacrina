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
  Modal
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
 
 
 
const DetailPage = (props) => {
   
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
  } const navigateView=()=>
  { 
    
    props.navigation.navigate('UserList')
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
  
  return (
    
    <View style={{ flex: 1, padding: sizeWidth(2),backgroundColor:Color.white }}>
      <SafeAreaView  >
        <StatusBar />
        <View style={styles.image1}>
            <ImageBackground
                style={{
                  height: sizeWidth(85),
                  width: "100%",
                  resizeMode: 'cover',
                 
                }}
                imageStyle={{ 
                  borderRadius:sizeWidth(5),
                  
                }}

                source={Images.image5}
              >
                {/* HERDER VIEW */}
                <View style={styles.headerView}>
                  {/* back button */}
                  <TouchableOpacity style={styles.RightBack} onPress={navigateView}>
                  <Image
                style={styles.copaciaImag}
                source={Images.left}
              />
                  </TouchableOpacity>
                  {/* header */}
                  <View>
                    <Text style={styles.trip_text}>{"Trip Details"}</Text>
                  </View>
                  {/* Right view */}
                  <View style={styles.leftBack}>
                  <Image
                style={styles.leftBackImag}
                source={Images.truck}
              />
                  </View>
                </View>

                {/* FOOTER VIEW */}
                <View style={styles.FooterView1}>
                  {/* FIRST */}
                  <View style={styles.firstImageView2}>
                  <Image
                style={styles.firstImage1}
                source={Images.image5}
              />
                  </View>
                {/* SECOND */}
                <View>
                <Image
                style={styles.firstImage}
                source={Images.image2}
              />
                </View>
                {/* THIRD */}
                <View>
                <Image
                style={styles.firstImage}
                source={Images.image3}
              />
                </View>
                {/* FOUTH */}
                <View>
                <Image
                style={styles.firstImage}
                source={Images.image4}
              />
                </View>


                </View>
                
              </ImageBackground>
            </View>
      
   
               <View style={[styles.container]}>

              <View style={{flexDirection:"row"}}>

                  <View style={styles.tarkyView}> 
                    <Text style={styles.text}>{"Turkey"}</Text>
                    </View>
                             
         
            </View>
            <View style={{flexDirection:"row"}}>

<View style={styles.total}> 
<Text style={styles.text1}>{"$50.00"}</Text>
</View>


</View>
<View style={{flexDirection:"row"}}>

<View style={styles.cappocialVeiw}> 

<Text style={styles.text2}> {"Cappadocia"}</Text>
</View>


</View>
{/* LIST ROW */}
<View style={ styles.ratingListVeiw }>

<View style={styles.ListRow} > 
<Image
                style={styles.listImage}
                source={Images.star}
              />
<Text style={styles.text3}> {"5.0"}</Text>
</View>
<View style={styles.ListRow} > 
<Image
                style={styles.listImage}
                source={Images.clock}
              />
<Text style={styles.text3}> {"30 mins"}</Text>
</View>
<View style={styles.ListRow} > 
<Image
                style={styles.listImage}
                source={Images.location}
              />
<Text style={styles.text3}> {"20 km"}</Text>
</View>


</View>

{/* Drow Content */}
<View style={ styles.ratingListVeiw1 }>

<Text style={styles.conent_text}>
  {"Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. Other notables sites include Bronze Age homes carved into valley walls by troglodytes (cave dwellers) and later used as refuges by early Christians. The 100m-deep Ihlara Canyon houses numerous rock-face churches. Turkey."}
</Text>
</View>
         

           
         

            </View>

 
            
     
        
           
      </SafeAreaView>
      <View style={styles.footerButton}>
      <TouchableOpacity style={ styles.Bookbutton} >
                    <Text style={styles.booktext}>{"Book Now"}</Text>
                    <View style={styles.roundIcon}>
                    <Image source={Images.next} style={styles.btnIcon} />
                    </View>
                </TouchableOpacity>
                </View>
     
    </View>
    
 
  );

}


//Connect Everything
export default DetailPage;



