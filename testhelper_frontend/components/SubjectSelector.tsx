/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:17
 */

// File: components/SubjectSelector.js

import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useExamContext} from "../context/ExamContext";
import {useSelectedExamContext} from "../context/SelectedExamContext";
import {useSelectedSubjectContext} from "../context/SelectedSubjectContext";


const SubjectSelector: React.FC = () => {
    const [subjects, setSubjects] = useState<string[]>()
    const {exams} = useExamContext()
    const {selectedSubject, selectSubject, clearSubjectSelection} = useSelectedSubjectContext()

    useEffect(() => {
        const uniqueSubjects = Array.from(new Set(exams.flatMap(e => e.subject)));
        setSubjects(uniqueSubjects);
    }, [exams]);

    return (
        <View style={styles.subjectContainer}>
            <TouchableOpacity
                key={"All"}
                style={[
                    styles.subjectButton,
                    !selectedSubject && styles.selectedButton
                ]}
                onPress={() => clearSubjectSelection()}
            >
                <Text style={styles.subjectText}>{"All"}</Text>
            </TouchableOpacity>
            {subjects ? subjects.map((subject) => (
                <TouchableOpacity
                    key={subject}
                    style={[
                        styles.subjectButton,
                        subject === selectedSubject && styles.selectedButton
                    ]}
                    onPress={() => selectSubject(subject)}
                >
                    <Text style={styles.subjectText}>{subject}</Text>
                </TouchableOpacity>
            )) : null}

        </View>);
}

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
