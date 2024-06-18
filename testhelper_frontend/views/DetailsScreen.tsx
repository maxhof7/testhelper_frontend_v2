/**
 * Project: testhelper_frontend_v2
 * Created by: Hofbauer Maximilian
 * Date: 18.06.2024
 * Time: 13:47
 */

import React from 'react';
import Details from "../components/Details";

// @ts-ignore
const DetailsScreen = ({route}) => {
    const {selectedSubject, examDate} = route.params;
    return (
        <Details selectedSubject={selectedSubject} examDate={examDate}></Details>
    );
};

export default DetailsScreen;