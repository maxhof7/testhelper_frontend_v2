/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:18
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
        if (!selectedSubject || !examDate) return;

        // Assuming you want to map "MAT" to "Mathematics"
        if (selectedSubject.toString().toUpperCase().includes("MAT")) {
            selectedSubject = "Mathematics";
        }

        const filteredExams = exams.filter(exam =>
            exam.subject === selectedSubject && exam.date.toString().includes(examDate)
        );

        if (filteredExams.length > 0) {
            setActualExam(filteredExams[0]); // Assuming there's only one matching exam
        } else {
            setActualExam(undefined); // Reset actualExam if no matching exam found
        }
    }, [exams, selectedSubject, examDate]);

    const calculateProgressWidth = (rating: number): string => {
        const min = 1;
        const max = 10;
        const progress = (rating - min) / (max - min) * 100;
        return `${progress}%`;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{selectedSubject}</Text>
                <Text style={styles.headerText}>{examDate}</Text>
            </View>
            <View style={styles.detailsContainer}>
                {actualExam && (
                    <>
                        <Text style={styles.detailText}>Type: {actualExam.type}</Text>
                        <Text style={styles.detailText}>Difficulty Rating:</Text>
                        <View style={styles.difficultyBar}>
                            <View style={[styles.difficultyFill, { width: calculateProgressWidth(actualExam.difficulty_rating) }]} />
                        </View>
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#000080',
    },
    headerText: {
        fontSize: 18,
        color: '#fff',
    },
    detailsContainer: {
        padding: 20,
    },
    detailText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    difficultyBar: {
        height: 20,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    difficultyFill: {
        height: '100%',
        backgroundColor: 'blue',
    },
});

export default Details;
