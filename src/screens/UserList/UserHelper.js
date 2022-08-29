import React from 'react';

import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import styles from './style';
import {
  CustomTextView,
  } from "@component";

 
export function ChatUserListHelper(item, index, onPress) {
  let cat=item.cat.toString()
   return (
    <TouchableOpacity   key={index}
      style={[styles.listMainView]}
      onPress={() => onPress(JSON.stringify(item))}>
      <View style={styles.innerView}>
       
        <View style={styles.textMainView}>
          <View style={styles.textInnerView}>
            <View style={{flex:1}}>
            
              <CustomTextView
                label={item.name}
                containerStyle={styles.nameText}
              />
            </View>
            <View>
           
            </View>
          </View>
          <View style={styles.descriptionView}>
          <View  style={{flex:1}}>
          {cat.split(', ').map((step, i) => (
  <View>
      <Text style={styles.descriptionText}>
        {i > 0 && ", "}

         {step}
      </Text>
  </View>
 ))}
             
            </View>
             
          </View>
         
        </View>
      </View>
    </TouchableOpacity>
  );
}

