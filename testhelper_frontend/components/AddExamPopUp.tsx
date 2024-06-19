import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useExamContext } from '../context/ExamContext';
import { IExam } from '../models/exam';
import StarRating from 'react-native-star-rating-widget';

interface AddExamPopUpProps {
    isVisible: boolean;
    onClose: () => void;
}

const AddExamPopUp: React.FC<AddExamPopUpProps> = ({ isVisible, onClose }) => {
    const { addExam } = useExamContext();
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [difficultyRating, setDifficultyRating] = useState(0);
    const [type, setType] = useState('');


    const handleSubmit = async () => {
        if (!date) return;
        const newExam: IExam = {
            id: Date.now(),
            date: new Date(date),
            difficulty_rating: difficultyRating,
            type,
            subject,
            materials: [],
        };

        await addExam(newExam);
        setSubject('')
        setDate('')
        setDifficultyRating(0)
        setType('')
        onClose();
    };

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.container}>
                <Text style={styles.title}>Add New Exam</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Subject"
                    value={subject}
                    onChangeText={setSubject}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date (YYYY-MM-DD)"
                    value={date}
                    onChangeText={setDate}
                />
                <StarRating
                    rating={difficultyRating}
                    onChange={setDifficultyRating}
                    maxStars={5}
                    starSize={30}
                    color="#FFD700"
                    style={styles.starRating}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Type"
                    value={type}
                    onChangeText={setType}
                />
                <Button title="Add Exam" onPress={handleSubmit} />
                <Button title="Close" onPress={onClose} color="red" />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    dateInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#555',
    },
    starRating: {
        marginVertical: 10,
    },
});

export default AddExamPopUp;
