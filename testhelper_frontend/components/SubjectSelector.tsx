/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:17
 */

// File: components/SubjectSelector.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SubjectSelectorProps{
    selectedSubject: any,
    setSelectedSubject: any
}

const SubjectSelector:React.FC<SubjectSelectorProps> = ({ selectedSubject, setSelectedSubject }) => (
    <View style={styles.subjectContainer}>
        {['Deutsch', 'Mathe', 'POS', 'DBI'].map((subject) => (
            <TouchableOpacity
                key={subject}
                style={[
                    styles.subjectButton,
                    subject === selectedSubject && styles.selectedButton
                ]}
                onPress={() => setSelectedSubject(subject)}
            >
                <Text style={styles.subjectText}>{subject}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

const styles = StyleSheet.create({
    subjectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    subjectButton: {
        padding: 10,
        borderRadius: 25,
        backgroundColor: 'lightgrey',
    },
    selectedButton: {
        backgroundColor: 'blue',
    },
    subjectText: {
        color: 'white',
    },
});

export default SubjectSelector;
