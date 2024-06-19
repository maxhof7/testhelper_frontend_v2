import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { getExams } from "../api/API Access";
import { IExam } from "../models/exam";
import MaterialUpload from "./MaterialUpload";

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
            setActualExam(filteredExams[0]);
        } else {
            setActualExam(undefined);
        }
    }, [exams, selectedSubject, examDate]);

    const calculateProgressWidth = (rating: number): string => {
        const min = 1;
        const max = 10;
        const progress = (rating - min) / (max - min) * 100;
        return `${progress}%`;
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{selectedSubject}</Text>
                <Text style={styles.headerText}>{new Date(examDate).toDateString()}</Text>
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
            <Text style={styles.materialsHeader}>Materials:</Text>
            {actualExam?.materials.map((m, index) => (
                <Text key={index} style={styles.materialText}>{m.title}</Text>
            ))}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Material</Text>
            </TouchableOpacity>
            <MaterialUpload />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    },
    detailsContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
    },
    detailText: {
        fontSize: 18,
        marginBottom: 10,
    },
    difficultyBar: {
        height: 20,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        overflow: 'hidden',
    },
    difficultyFill: {
        height: '100%',
        backgroundColor: '#007bff',
    },
    materialsHeader: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    materialText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    addButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Details;
