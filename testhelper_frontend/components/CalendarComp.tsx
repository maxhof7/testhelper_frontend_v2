/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:22
 */

// File: components/CalendarView.js

import React from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';

interface CalendarCompProps{
    selectedDate: any,
    setSelectedDate: any
}

const CalendarComp: React.FC<CalendarCompProps> = ({ selectedDate, setSelectedDate }) => (
    <Calendar
        current={'2023-05-01'}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
            [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' }
        }}
        theme={{
            arrowColor: 'blue',
            todayTextColor: 'blue',
            selectedDayBackgroundColor: 'blue',
        }}
        style={styles.calendar}
    />
);

const styles = StyleSheet.create({
    calendar: {
        marginVertical: 10,
    },
});

export default CalendarComp;
