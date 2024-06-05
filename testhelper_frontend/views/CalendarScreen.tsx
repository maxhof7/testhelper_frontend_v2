/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:25
 */



import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectSelector from '../components/SubjectSelector';
import ViewToggle from '../components/ViewToggle';
import CalendarView from '../components/CalendarComp';
import ExamDetails from '../components/ExamDetails';
import CalendarComp from "../components/CalendarComp";
import {useExamContext} from "../context/ExamContext";

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState('2023-05-18');
    const [selectedSubject, setSelectedSubject] = useState('Mathematik SA');
    const [examDate, setExamDate] = useState('2024-06-05');
    const [view, setView] = useState('calendar');
    const {initializeTestData,fetchExams} = useExamContext()

    useEffect(() => {
        initializeTestData()
            .then(()=>fetchExams())
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Header />
            <SubjectSelector selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
            <ViewToggle setView={setView} />
            {view === 'calendar' && (
                <CalendarComp selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            )}
            <ExamDetails selectedSubject={selectedSubject} examDate={examDate} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default CalendarScreen;
