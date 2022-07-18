import React, { useState } from "react";
import { View, Text, Dimensions } from 'react-native'
import { COLORS } from '../../constants'
import CalendarPicker from 'react-native-calendar-picker';
import { styles } from ".";

export default function Pilgimage() {
    const [selectDate, setSelectDate] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.viewCalender}>
                <CalendarPicker
                    startFromMonday={true}
                    onDateChange={(date) => setSelectDate(date)}
                    todayBackgroundColor={COLORS.active_tab}
                    selectedDayColor={COLORS.app_color}
                    selectedDayTextColor={COLORS.white}
                    textStyle={{
                        color: '#000000',
                      }}
                />

                
            </View>


        </View>
    )
}