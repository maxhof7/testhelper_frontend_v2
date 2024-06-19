import React, { useState } from 'react';
import {ScrollView, StyleSheet, View, Text, FlatList, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CalendarComp from '../components/CalendarComp';
import ExamSmall from '../components/ExamSmall';
import { useExamContext } from '../context/ExamContext';
import AddExamPopUp from "../components/AddExamPopUp";

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState('2024-06-19');
    const { exams } = useExamContext();
    const navigation = useNavigation();
    const [isAddExamPopUpVisible, setAddExamPopUpVisible] = useState(false);

    const filteredExams = exams.filter(exam =>
        new Date(exam.date).toDateString() === new Date(selectedDate).toDateString()
    );
    const toggleAddExamPopUp = () => {
        setAddExamPopUpVisible(!isAddExamPopUpVisible);
    };

    return (
        <ScrollView style={styles.container}>
            <CalendarComp exams={exams} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <Button title="Add Exam" onPress={toggleAddExamPopUp} />
            <View style={styles.examsContainer}>
                {filteredExams.length > 0 ? (
                    <FlatList
                        data={filteredExams}
                        keyExtractor={exam => exam.id.toString()}
                        renderItem={({ item }) => <ExamSmall exam={item} navigation={navigation} />}
                    />
                ) : (
                    <Text style={styles.noExamsText}>No exams scheduled for this date.</Text>
                )}
            </View>
            <AddExamPopUp isVisible={isAddExamPopUpVisible} onClose={toggleAddExamPopUp} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    examsContainer: {
        marginTop: 20,
        padding: 10,
    },
    noExamsText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default CalendarScreen;
