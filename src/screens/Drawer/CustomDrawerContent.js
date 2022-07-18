import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { styles } from '.';
import { IMAGES, ICONS } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawerContent = ({ navigation }) => {

  const [isVocations, setVocation] = useState(false);
  const [isBasilian, setBasilian] = useState(false);
  const [isMinistries, setMinistries] = useState(false);
  const [isEvents, setEvents] = useState(false);
  const [isAboutUs, setAboutUs] = useState(false);


  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps={true} 
        showsVerticalScrollIndicator={false}
        >
        <View>
          {/* Home */}
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Image
              style={styles.appLogoImg}
              source={IMAGES.app_logo} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.txtDrawer}>
              • Home
            </Text>
          </TouchableOpacity>
          {/* Vocations */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => navigation.navigate('WebView', { title: 'Vocation', url: 'https://sistersofstbasil.org/vocations-2/' })}>
              <Text style={[styles.txtDrawer]}>
                • Vocations
              </Text>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }} onPress={() => isVocations ? setVocation(false) : setVocation(true)} >
              <Image
                style={[styles.rightArrowImg, isVocations ? { transform: [{ rotate: '90deg' }] } : { transform: [{ rotate: '0deg' }] }]}
                source={ICONS.right_arrow}
              />
            </TouchableOpacity>
          </View>
          {isVocations ? <View style={styles.subView}>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Becoming a Sister', url: 'https://sistersofstbasil.org/vocations-2/becoming-a-sister/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Becoming a Sister
              </Text>
            </TouchableOpacity>
          </View> : null}
          {/* Basilian Associates */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => navigation.navigate('WebView', { title: 'Basilian Associates', url: 'https://sistersofstbasil.org/basilian-associates/' })}>
              <Text style={styles.txtDrawer}>
                • Basilian Associates
              </Text>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }} onPress={() => setBasilian(!isBasilian)} >
              <Image
                style={[styles.rightArrowImg, isBasilian ? { transform: [{ rotate: '90deg' }] } : { transform: [{ rotate: '0deg' }] }]}
                source={ICONS.right_arrow}
              />
            </TouchableOpacity>
          </View>
          {isBasilian ? <View style={styles.subView}>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Becoming a Sister', url: 'https://sistersofstbasil.org/basilian-associates/becoming-a-basilian-associate/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Becoming a Basilian
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Becoming a Sister', url: 'https://sistersofstbasil.org/basilian-associates/becoming-a-basilian-associate/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Associate
              </Text>
            </TouchableOpacity>
          </View> : null}
          {/* Ministries */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => navigation.navigate('WebView', { title: 'Ministries', url: 'https://sistersofstbasil.org/ministries/' })}>
              <Text style={styles.txtDrawer}>
                • Ministries
              </Text>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }} onPress={() => setMinistries(!isMinistries)} >
              <Image
                style={[styles.rightArrowImg, isMinistries ? { transform: [{ rotate: '90deg' }] } : { transform: [{ rotate: '0deg' }] }]}
                source={ICONS.right_arrow}
              />
            </TouchableOpacity>
          </View>
          {isMinistries ? <View style={styles.subView}>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'House of Prayer', url: 'https://sistersofstbasil.org/ministries/house-of-prayer-2/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • House of Prayer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'OLPH Shrine – Virtual Tour', url: 'https://sistersofstbasil.org/ministries/olph-shrine-virtual-tour/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • OLPH Shrine – Virtual Tour
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Mount Macrina Manor', url: 'https://sistersofstbasil.org/ministries/mount-macrina-manor-nursing-home/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Mount Macrina Manor
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Mount St. Macrina Cemetery and Mausoleum', url: 'https://sistersofstbasil.org/ministries/mount-st-macrina-cemetary-and-mausoleum/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Mount St. Macrina Cemetery and Mausoleum
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Religious Gift Shop', url: 'https://sistersofstbasil.org/ministries/gift-shop/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Religious Gift Shop
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Card Department', url: 'https://sistersofstbasil.org/ministries/card-department/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Card Department
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Enrollments', url: 'https://sistersofstbasil.org/ministries/card-department/enrollments/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Enrollments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Our Lady of Perpetual Help Prayer League', url: 'https://sistersofstbasil.org/ministries/our-lady-of-perpetual-help-prayer-league/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Our Lady of Perpetual Help Prayer League
              </Text>
            </TouchableOpacity>
          </View> : null}

          {/* Events */}

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => navigation.navigate('WebView', { title: 'Ministries', url: 'https://sistersofstbasil.org/events-2/' })}>
              <Text style={styles.txtDrawer}>
                • Events
              </Text>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }} onPress={() => setEvents(!isEvents)} >
              <Image
                style={[styles.rightArrowImg, isEvents ? { transform: [{ rotate: '90deg' }] } : { transform: [{ rotate: '0deg' }] }]}
                source={ICONS.right_arrow}
              />
            </TouchableOpacity>
          </View>
          {isEvents ? <View style={styles.subView}>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'House of Prayer', url: 'https://sistersofstbasil.org/events-2/house-of-prayer/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • House of Prayer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Annual Pilgrimage in honor of Our Lady of Perpetual Help', url: 'https://sistersofstbasil.org/events-2/annual-pilgrimage-honoring-our-lady-of-perpetual-help/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Annual Pilgrimage in honor of Our Lady of Perpetual Help
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Pilgrimage Program', url: 'https://sistersofstbasil.org/pilgrimage-program/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Pilgrimage Program
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Safe Environment Documents', url: 'https://sistersofstbasil.org/events-2/documents/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Safe Environment Documents
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Pilgrimage DVD', url: 'https://sistersofstbasil.org/events-2/pilgrimage-dvd/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Pilgrimage DVD
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Hotels and Motels', url: 'https://sistersofstbasil.org/events-2/hotels-and-motels/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Hotels and Motels
              </Text>
            </TouchableOpacity>
          </View> : null}


          {/* About us */}

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => navigation.navigate('WebView', { title: 'About Us', url: 'https://sistersofstbasil.org/about-us/' })}>
              <Text style={styles.txtDrawer}>
                • About Us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }} onPress={() => setAboutUs(!isAboutUs)} >
              <Image
                style={[styles.rightArrowImg, isAboutUs ? { transform: [{ rotate: '90deg' }] } : { transform: [{ rotate: '0deg' }] }]}
                source={ICONS.right_arrow}
              />
            </TouchableOpacity>
          </View>
          {isAboutUs ? <View style={styles.subView}>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'Patron Saints', url: 'https://sistersofstbasil.org/about-us/patron-saints-2/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • Patron Saints
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WebView', { title: 'The Byzantine Catholic Archeparchy of Pittsburgh', url: 'https://sistersofstbasil.org/the-byzantine-catholic-archeparchy-of-pittsburgh/' })}>
              <Text style={[styles.txtDrawerSub]}>
                • The Byzantine Catholic Archeparchy of Pittsburgh
              </Text>
            </TouchableOpacity>
          </View> : null}
        </View>
      </ScrollView>
    </View>
  )
}

export default CustomDrawerContent

