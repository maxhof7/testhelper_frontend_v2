/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 22.05.2024
 * Time: 14:18
 */

// File: components/Header.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => (
    <View style={styles.header} testID={"headerComponent"}>
        <Text style={styles.headerText}>My Exams</Text>
        <TouchableOpacity>
            <Text>👤</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#000080',
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
    },
});

export default Header;
