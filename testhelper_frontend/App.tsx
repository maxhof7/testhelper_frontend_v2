import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Button} from "react-native";
import {ExamProvider} from "./context/ExamContext";
import {SelectedExamProvider} from "./context/SelectedExamContext";
import {SelectedSubjectProvider} from "./context/SelectedSubjectContext";
import CalendarScreen from "./views/CalendarScreen";
import DetailsScreen from "./views/DetailsScreen";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <ExamProvider>
                <SelectedExamProvider>
                    <SelectedSubjectProvider>
                        <Stack.Navigator>
                            <Stack.Screen name="Overview" component={CalendarScreen}/>
                            <Stack.Screen
                                name="Details"
                                component={DetailsScreen}
                                options={({navigation}) => ({
                                    title: 'Details',
                                    headerLeft: () => (
                                        <Button
                                            onPress={() => navigation.goBack()}
                                            title="Back"
                                            color="#000"
                                        />
                                    ),
                                })}
                            />
                        </Stack.Navigator>
                    </SelectedSubjectProvider>
                </SelectedExamProvider>
            </ExamProvider>
        </NavigationContainer>
    );
};

export default App;
