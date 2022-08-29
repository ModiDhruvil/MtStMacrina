import { StyleSheet, Text, View, Image ,Linking  } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { styles } from '.';
import { IMAGES, ICONS } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AlertMsg from '../../utils/AlertMsg';

const CustomDrawerContent = ({ navigation }) => {

  const handleOpenLink = async () => {
    try {
      // await Linking.openURL('fb://facewebmodal/f?href=https://www.facebook.com/sistersofstbasil.uniontown/');
     await Linking.openURL('fb://page/1447421802234314');

    } catch {
      throw new Error('URI cant open:' + url);
    }
  };

  const  callDonationWeb = async() =>{
    try {
       await Linking.openURL('https://sistersofstbasil.org/make-a-gift/donations-online/');
  
      } catch {
        throw new Error('URI cant open:' + url);
      }
 }

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" 
        showsVerticalScrollIndicator={false}
        >
        <View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Image
              style={styles.appLogoImg}
              source={IMAGES.app_logo} />
          </View>
          {/* Home */}
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => navigation.navigate('WebView', { title: '', url: 'https://sistersofstbasil.org' })}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.txtDrawer]}>
                • Website
              </Text>
              <Image
                style={styles.rightArrowImg}
                source={ICONS.right_arrow}
              />
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => navigation.navigate('WebView', { title: '', url: 'https://sistersofstbasil.org/pilgrimage/' })}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.txtDrawer]}>
                • Pilgrimage
              </Text>
              <Image
                style={styles.rightArrowImg}
                source={ICONS.right_arrow}
              />
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => navigation.navigate('WebView', { title: '', url: 'https://sistersofstbasil.org/cards-encouragements/' })}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.txtDrawer]}>
                • Cards/Enrollments
              </Text>
              <Image
                style={styles.rightArrowImg}
                source={ICONS.right_arrow}
              />
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => navigation.navigate('WebView', { title: '', url: 'https://sistersofstbasil.org/photos-videos/' })}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.txtDrawer]}>
                • Photos/Videos
              </Text>
              <Image
                style={styles.rightArrowImg}
                source={ICONS.right_arrow}
              />
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => handleOpenLink()}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.txtDrawer]}>
                • Facebook
              </Text>
              <Image
                style={styles.rightArrowImg}
                source={ICONS.right_arrow}
              />
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => callDonationWeb()}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.txtDrawer]}>
                • Donation
              </Text>
              <Image
                style={styles.rightArrowImg}
                source={ICONS.right_arrow}
              />
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default CustomDrawerContent

