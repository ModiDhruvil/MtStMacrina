import React from "react";
import { View, Text, ScrollView, TextInput } from 'react-native'
import { styles } from ".";
import { RadioButton, Checkbox } from 'react-native-paper';
import { COLORS } from "../../constants";


export default function Donate() {
    const [value, setValue] = React.useState('first');
    const [checked, setChecked] = React.useState(false);

    return (
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
                                    <RadioButton value="first"
                                        color={COLORS.active_tab} />

                                    <Text style={styles.txtRadioButton}>Ukraine Humanitarian Aid</Text>

                                </View>
                                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginStart: 30 }}>
                                    <RadioButton value="second"
                                        color={COLORS.active_tab} />
                                    <Text style={styles.txtRadioButton}>Annual Appeal</Text>
                                </View>

                            </View>
                            <View style={styles.viewChildRadioButton}>
                                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <RadioButton value="third"
                                        color={COLORS.active_tab} />
                                    <Text style={styles.txtRadioButton}>Pilgrimage Appeal</Text>

                                </View>
                                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginStart: 30 }}>
                                    <RadioButton value="fourth"
                                        color={COLORS.active_tab} />

                                    <Text style={styles.txtRadioButton}>Christmas Appeal</Text>
                                </View>

                            </View>
                        </RadioButton.Group>

                    </View>
                    <Text style={styles.txtAppeal}>In Memory Of*</Text>
                    <TextInput
                        style={styles.txtInput} />
                    <Text style={styles.txtAppeal}>In Honor Of*</Text>
                    <TextInput
                        style={styles.txtInput} />

                    <Text style={styles.txtAppeal}>Price Amount*</Text>

                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                            <RadioButton value="25"
                                color={COLORS.active_tab} />

                            <Text style={styles.txtRadioButton}>$25</Text>

                            <RadioButton value="50"
                                color={COLORS.active_tab} />

                            <Text style={styles.txtRadioButton}>$50</Text>

                            <RadioButton value="100"
                                color={COLORS.active_tab} />

                            <Text style={styles.txtRadioButton}>$100</Text>


                            <RadioButton value="150"
                                color={COLORS.active_tab} />

                            <Text style={styles.txtRadioButton}>$150</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <RadioButton value="150"
                                color={COLORS.active_tab} />

                            <Text style={styles.txtRadioButton}>Other</Text>
                        </View>

                    </RadioButton.Group>

                    <Text style={styles.txtAppeal}>Other Amount*</Text>
                    <TextInput
                        style={styles.txtInput} />

                    <Text style={styles.txtAppeal}>Name*</Text>

                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            numberOfLines={1}
                            placeholder="First Name"
                            placeholderTextColor={COLORS.boderColor}
                            style={styles.txtInputHalf} />

                        <TextInput
                            numberOfLines={1}
                            placeholder="Last Name"
                            placeholderTextColor={COLORS.boderColor}
                            style={styles.txtInputHalf} />

                    </View>

                    <Text style={styles.txtAppeal}>Address*</Text>

                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            numberOfLines={1}
                            placeholder="Address"
                            placeholderTextColor={COLORS.boderColor}
                            style={styles.txtInputHalf} />

                        <TextInput
                            numberOfLines={1}
                            placeholder="City"
                            placeholderTextColor={COLORS.boderColor}
                            style={styles.txtInputHalf} />

                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            numberOfLines={1}
                            placeholder="State/Province/Region"
                            placeholderTextColor={COLORS.boderColor}
                            style={styles.txtInputHalf} />

                        <TextInput
                            numberOfLines={1}
                            placeholder="ZIP/Postal Code"
                            placeholderTextColor={COLORS.boderColor}
                            style={styles.txtInputHalf} />

                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            numberOfLines={1}
                            placeholder="Country"
                            placeholderTextColor={COLORS.boderColor}
                            style={styles.txtInputHalf} />

                        <TextInput
                            numberOfLines={1}
                            placeholder="Phone"
                            placeholderTextColor={COLORS.boderColor}
                            style={styles.txtInputHalf} />

                    </View>
                    <Text style={styles.btnPayPal}>
                      Donate now with paypal
                    </Text>

                </View>
            </ScrollView>
        </View>
    )
}