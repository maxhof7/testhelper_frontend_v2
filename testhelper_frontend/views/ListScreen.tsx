/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:26
 */


import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useExamContext} from "../context/ExamContext";
import ExamSmall from "../components/ExamSmall";

const ListScreen = () => {
    const [view, setView] = useState('list');
    const {exams} = useExamContext()

    return (
        <View style={styles.container}>
            {/*{exams? exams.map( e => {*/}
            {/*    return <ExamSmall exam={e}></ExamSmall>*/}
            {/*}):null}*/}
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
