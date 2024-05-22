/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:21
 */

// File: components/ViewToggle.js

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface ViewToggleProps{
    setView: any
}

const ViewToggle:React.FC<ViewToggleProps> = ({ setView }) => (
    <View style={styles.viewToggle}>
        <Button title="Calendar View" onPress={() => setView('calendar')} />
        <Button title="List View" onPress={() => setView('list')} />
    </View>
);

const styles = StyleSheet.create({
    viewToggle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
});

export default ViewToggle;
