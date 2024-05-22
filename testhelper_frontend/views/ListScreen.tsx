/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:26
 */


import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectSelector from '../components/SubjectSelector';
import ViewToggle from '../components/ViewToggle';

const ListScreen = () => {
    const [selectedSubject, setSelectedSubject] = useState('Mathematik SA');
    const [view, setView] = useState('list');

    return (
        <View style={styles.container}>
            <Header />
            <SubjectSelector
                selectedSubject={selectedSubject}
                setSelectedSubject={setSelectedSubject}
            />
            <ViewToggle setView={setView} />
            <Text>List View (to be implemented)</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ListScreen;
