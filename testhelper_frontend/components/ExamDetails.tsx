/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:24
 */

// File: components/ExamDetails.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ExamDetailsProps{
    selectedSubject: any,
    examDate: any
}

const ExamDetails:React.FC<ExamDetailsProps> = ({ selectedSubject, examDate }) => (
    <View style={styles.detailsContainer}>
        <View style={styles.examInfo}>
            <Text style={styles.examText}>{selectedSubject}</Text>
            <Text style={styles.examDate}>{examDate}</Text>
        </View>
        <Text style={styles.teststoff}>Teststoff:</Text>
        <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 10,
        borderTopWidth: 1,
        borderColor: 'grey',
    },
    examInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    examText: {
        fontSize: 18,
    },
    examDate: {
        fontSize: 18,
    },
    teststoff: {
        marginBottom: 10,
    },
    detailsButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    detailsButtonText: {
        color: 'white',
    },
});

export default ExamDetails;
