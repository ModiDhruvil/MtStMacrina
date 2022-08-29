import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, FlatList } from 'react-native'
import { COLORS } from '../../constants'
import { Calendar } from 'react-native-calendars';
import { styles } from ".";
import CustomProgress from "../../utils/CustomProgress";
import moment from "moment";
import axios from "axios";

export default function Pilgrimage() {

    const [selectDate, SetSelectedDate] = useState(null)
    const [dataPilgrimage, setDataPilgrimage] = useState([])
    const [loading, setLoading] = useState(false)


    const callApiPilgrimage = (selectDate) => {
        setDataPilgrimage(null)
        SetSelectedDate(selectDate)
        const formatDate = moment(selectDate).format("DD-MM-YYYY")
        ApiPilgrimage(formatDate)
    }

    const ApiPilgrimage = (formatDate) => {
        setLoading(true)
        const params = new URLSearchParams({ date_event: formatDate });
        return new Promise(() => {
            axios
                .post('event_schedules', params.toString())
                .then((response) => {
                    setDataPilgrimage(response.data.response.schedule);
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                });
        });
    };




    const renderItem = ({ item }) => (
        <View key={item.event_title.toString()} style={{ padding: 10, backgroundColor: COLORS.app_color, margin: 10, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 0.7, color: COLORS.black }}>From</Text>
                <Text style={{ flex: 0.3, textAlign: 'left', color: COLORS.black }}>To</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 0.7, color: COLORS.white }}>{item.from_time}</Text>
                <Text style={{ flex: 0.3, textAlign: 'left', color: COLORS.white }}>{item.to_time}</Text>
            </View>
            <Text style={{ color: COLORS.white }}>{item.event_title}</Text>
        </View>
    )


    if (loading) {
        return (<View style={styles.loading}>
            <CustomProgress />
        </View>);
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.viewCalender}>
                    <Calendar
                        onDayPress={day => {
                            console.log('selected day', day.dateString);
                            callApiPilgrimage(day.dateString)
                        }}
                        firstDay={1}
                        current={selectDate ? selectDate : ''}
                        hideDayNames={false}
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        onPressArrowRight={addMonth => addMonth()}
                        theme={{
                            todayBackgroundColor: COLORS.active_tab,
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            calendarBackground: 'white',
                            selectedDayTextColor: 'black',
                            todayTextColor: 'white',
                            dayTextColor: 'black',
                            arrowColor: 'black',
                            disabledArrowColor: 'black',
                            monthTextColor: 'black',
                            indicatorColor: 'black',
                        }}

                    />

                </View>

                <FlatList
                    data={dataPilgrimage ? dataPilgrimage : null}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        )
    }
}