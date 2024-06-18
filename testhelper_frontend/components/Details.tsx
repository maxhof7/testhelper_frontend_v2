/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 18.06.2024
 * Time: 13:54
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeststoffComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header} testID="detailsScreen">Mathematik SA</Text>
            <View style={styles.teststoffContainer}>
                <Text style={styles.teststoffTitle}>Teststoff</Text>
                <Text style={styles.teststoffText}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
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

export default TeststoffComponent;
