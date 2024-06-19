import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';
import {IExam} from "../models/exam";

interface CalendarCompProps {
    selectedDate: any,
    setSelectedDate: any
    exams: IExam[]
}

const CalendarComp: React.FC<CalendarCompProps> = ({selectedDate, setSelectedDate, exams}) => {
    const markedDates = exams.reduce((acc, exam) => {
        const dateString = new Date(exam.date).toISOString().split('T')[0];
        // @ts-ignore
        acc[dateString] = {marked: true, dotColor: 'red'};
        return acc;
    }, {});


    return (
        <Calendar
            current={'2024-06-01'}
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={{
                ...markedDates,
                [selectedDate]: {selected: true, marked: true, selectedColor: 'blue'},
            }}
            theme={{
                arrowColor: 'blue',
                todayTextColor: 'blue',
                selectedDayBackgroundColor: 'blue',
            }}
            style={styles.calendar}
        />
    );
};

const styles = StyleSheet.create({
    calendar: {
        marginVertical: 10,
    },
});

export default CalendarComp;
