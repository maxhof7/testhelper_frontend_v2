import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Swipeable} from 'react-native-gesture-handler';
import {FontAwesome} from '@expo/vector-icons';
import {IExam} from "../models/exam";
import {useExamContext} from "../context/ExamContext";
import StarRating from 'react-native-star-rating-widget';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ExamSmallProps {
    exam: IExam;
}

const ExamSmall: React.FC<ExamSmallProps> = ({exam}) => {
    const {deleteExamById} = useExamContext();
    const navigation = useNavigation();

    const handleDelete = async () => {
        await deleteExamById(exam.id.toString());
    };

    const renderRightActions = () => (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    );

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Icon
                    key={i}
                    name={i <= rating ? 'star' : 'star-border'}
                    size={20}
                    color="#FFD700"
                />
            );
        }
        return stars;
    };
    const handlePress = () => {
        // @ts-ignore
        navigation.navigate('Details', { selectedSubject: exam.subject, examDate: exam.date });
    };

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity
                style={styles.container}
                onPress={handlePress}>
                <Text style={styles.subject}>{exam.subject}</Text>
                <Text style={styles.date}>{new Date(exam.date).toDateString()}</Text>
                <View style={styles.difficulty}>
                    {renderStars(exam.difficulty_rating)}
                </View>
                <Text style={styles.type}>Type: {exam.type}</Text>
                <Text style={styles.materials}>Materials: {exam.materials.length}</Text>
            </TouchableOpacity>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    subject: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    date: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    },
    difficulty: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    type: {
        fontSize: 16,
        color: '#333',
    },
    materials: {
        fontSize: 16,
        color: '#333',
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: '100%',
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ExamSmall;
