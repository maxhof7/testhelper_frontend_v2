import React from 'react';
import { Button } from 'react-native';
import Details from '../components/Details';
import ExamDetails from "../components/ExamDetails";

// @ts-ignore
const DetailsScreen = ({ route }) => {
    const { selectedSubject, examDate } = route.params;
    return (
        <Details selectedSubject={selectedSubject} examDate={examDate} />
    );
};

export default DetailsScreen;
