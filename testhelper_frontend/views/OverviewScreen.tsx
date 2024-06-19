/**
 * author: simon
 * date: 05.06.2024
 * project: testhelper_frontend_v2
 * package_name:
 **/

import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import ViewToggle from "../components/ViewToggle";
import CalendarScreen from "./CalendarScreen";
import ListScreen from "./ListScreen";

const OverviewScreen = () => {
    const [view, setView] = useState('calendar');



    return (
        <ScrollView style={styles.container}>
            <ViewToggle setView={setView}/>
            {view == 'calendar' ?
            <CalendarScreen/>:<ListScreen/>}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        maxWidth: Dimensions.get("window").width,
    },
});

export default OverviewScreen;