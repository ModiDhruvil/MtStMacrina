import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { styles } from ".";
import { RadioButton } from 'react-native-paper';
import { COLORS } from "../../constants";
import { fn } from "moment";
import { add } from "react-native-reanimated";


export default function Donate({ navigation }) {
    const [value, setValue] = React.useState('Ukraine Humanitarian Aid');
    const [valuePrice, setValuePrice] = React.useState('25');
    const [otherAmt, setOtherAmt] = React.useState(null);
    const [memoryOf, setMemoryOf] = React.useState('')
    const [honorOf, setHonorOf] = React.useState('')
    const [fname, setFName] = React.useState('')
    const [lname, setLName] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [city, setCity] = React.useState('')
    const [state, setState] = React.useState('')
    const [zip, setZip] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [phone, setPhone] = React.useState('')



    const checkValidation = () => {
        if (valuePrice === 'Other') {
            if(otherAmt === null)
              alert('please enter')
        } else {
            navigation.navigate('Paypal', {
                appeal: value,
                memoryOf: memoryOf,
                honorOf: honorOf,
                valuePrice: otherAmt ? otherAmt : valuePrice,
                fname: fname,
                lname: lname,
                address: address,
                city: city,
                state: state,
                zip: zip,
                country: country,
                phone: phone,
            })
        }
    }


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
                <ScrollView>

                    <View style={styles.childContainer}>

                        <Text style={styles.txtHeader}>
                            To Donate, please fill out the following
                            information:
                        </Text>

                        <Text style={styles.txtAppeal}>Appeal*</Text>

                        <View style={styles.viewRadioButton}>

                            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                <View style={styles.viewChildRadioButton}>
                                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <RadioButton value="Ukraine Humanitarian Aid"
                                            color={COLORS.active_tab}
                                        />

                                        <Text style={styles.txtRadioButton}>Ukraine Humanitarian Aid</Text>

                                    </View>
                                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginStart: 30 }}>
                                        <RadioButton value="Annual Appeal"
                                            color={COLORS.active_tab}
                                        />
                                        <Text style={styles.txtRadioButton}>Annual/Christmas</Text>
                                    </View>

                                </View>
                                <View style={styles.viewChildRadioButton}>
                                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <RadioButton value="Pilgrimage Appeal"
                                            color={COLORS.active_tab}
                                        />
                                        <Text style={styles.txtRadioButton}>Pilgrimage Appeal</Text>

                                    </View>
                                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginStart: 30 }}>
                                        <RadioButton value="Christmas Appeal"
                                            color={COLORS.active_tab}
                                        />

                                        <Text style={styles.txtRadioButton}>Building Fund</Text>
                                    </View>

                                </View>
                            </RadioButton.Group>

                        </View>
                        <Text style={styles.txtAppeal}>In Memory Of*</Text>
                        <TextInput
                            style={styles.txtInput}
                            onChangeText={(text) => setMemoryOf(text)}
                            value={memoryOf} />
                        <Text style={styles.txtAppeal}>In Honor Of*</Text>
                        <TextInput
                            style={styles.txtInput}
                            onChangeText={(text) => setHonorOf(text)}
                            value={honorOf} />

                        <Text style={styles.txtAppeal}>Price Amount*</Text>

                        <RadioButton.Group onValueChange=
                            {newValue => { setValuePrice(newValue), valuePrice !== 'Other' ? setOtherAmt(null) : setOtherAmt(otherAmt) }}
                            value={valuePrice}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                                <RadioButton value="25"
                                    color={COLORS.active_tab}
                                />

                                <Text style={styles.txtRadioButton}>$25</Text>

                                <RadioButton value="50"
                                    color={COLORS.active_tab}
                                />

                                <Text style={styles.txtRadioButton}>$50</Text>

                                <RadioButton value="100"
                                    color={COLORS.active_tab}
                                />

                                <Text style={styles.txtRadioButton}>$100</Text>


                                <RadioButton value="250"
                                    color={COLORS.active_tab}
                                />

                                <Text style={styles.txtRadioButton}>$250</Text>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <RadioButton value="Other"
                                    color={COLORS.active_tab} />

                                <Text style={styles.txtRadioButton}>Other</Text>
                            </View>

                        </RadioButton.Group>

                        {valuePrice === 'Other' ? <View>
                            <Text style={styles.txtAppeal}>Other Amount*</Text>
                            <TextInput keyboardType="number-pad"
                                style={styles.txtInput}
                                onChangeText={(text) => setOtherAmt(text)}
                                value={otherAmt} />
                        </View> : null}
                        <Text style={styles.txtAppeal}>Name*</Text>

                        <View style={{ flexDirection: 'row' }}>

                            <TextInput
                                numberOfLines={1}
                                placeholder="First Name"
                                placeholderTextColor={COLORS.borderColor}
                                onChangeText={(text) => setFName(text)}
                                value={fname}
                                style={styles.txtInputHalf} />

                            <TextInput
                                numberOfLines={1}
                                placeholder="Last Name"
                                placeholderTextColor={COLORS.borderColor}
                                onChangeText={(text) => setLName(text)}
                                value={lname}
                                style={styles.txtInputHalf} />

                        </View>

                        <Text style={styles.txtAppeal}>Address*</Text>

                        <View style={{ flexDirection: 'row' }}>

                            <TextInput
                                numberOfLines={1}
                                placeholder="Address"
                                placeholderTextColor={COLORS.borderColor}
                                onChangeText={(text) => setAddress(text)}
                                value={address}
                                style={styles.txtInputHalf} />

                            <TextInput
                                numberOfLines={1}
                                placeholder="City"
                                onChangeText={(text) => setCity(text)}
                                value={city}
                                placeholderTextColor={COLORS.borderColor}
                                style={styles.txtInputHalf} />

                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput
                                numberOfLines={1}
                                placeholder="State/Province/Region"
                                placeholderTextColor={COLORS.borderColor}
                                onChangeText={(text) => setState(text)}
                                value={state}
                                style={styles.txtInputHalf} />

                            <TextInput
                                numberOfLines={1}
                                placeholder="ZIP/Postal Code"
                                onChangeText={(text) => setZip(text)}
                                value={zip}
                                placeholderTextColor={COLORS.borderColor}
                                style={styles.txtInputHalf} />

                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput
                                numberOfLines={1}
                                placeholder="Country"
                                placeholderTextColor={COLORS.borderColor}
                                onChangeText={(text) => setCountry(text)}
                                value={country}
                                style={styles.txtInputHalf} />

                            <TextInput
                                numberOfLines={1}
                                placeholder="Phone"
                                placeholderTextColor={COLORS.borderColor}
                                onChangeText={(text) => setPhone(text)}
                                value={phone}
                                style={styles.txtInputHalf} />

                        </View>
                        <TouchableOpacity onPress={() => checkValidation()}>
                            <Text style={styles.btnPayPal}>
                                Donate now with paypal
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}