/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 18.06.2024
 * Time: 13:54
 */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getExams } from "../api/API Access";
import { IExam } from "../models/exam";

interface DetailsProps {
    selectedSubject: any;
    examDate: any;
}

const Details: React.FC<DetailsProps> = ({ selectedSubject, examDate }) => {

    const [exams, setExams] = useState<IExam[]>([]);
    const [actualExam, setActualExam] = useState<IExam | undefined>();

    const fetchExams = async () => {
        try {
            const examsData = await getExams();
            setExams(examsData);
        } catch (error) {
            console.error('Error fetching exams:', error);
        }
    };

    useEffect(() => {
        fetchExams();
    }, []);

    useEffect(() => {
        if (!selectedSubject || !examDate) return

        const filteredExams = exams.filter(exam =>
            exam.subject === selectedSubject && exam.date === examDate
        );

        if (filteredExams.length > 0) {
            setActualExam(filteredExams[0]); // Assuming there's only one matching exam
        } else {
            setActualExam(undefined); // Reset actualExam if no matching exam found
        }
    }, [exams, selectedSubject, examDate]);

    return (
        <View style={styles.container}>
            <Text style={styles.header} testID="detailsScreen">{selectedSubject}</Text>
            <View style={styles.teststoffContainer}>
                <Text style={styles.teststoffTitle}>Teststoff</Text>
                <Text style={styles.teststoffText}>
                    {actualExam ? actualExam.difficulty_rating : 'Loading...'}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    teststoffContainer: {
        backgroundColor: '#d3d3d3',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    teststoffTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    teststoffText: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default Details;
