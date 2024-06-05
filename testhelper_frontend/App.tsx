import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CalendarScreen from './views/CalendarScreen';
import ListScreen from './views/ListScreen';
import {ExamProvider} from "./context/ExamContext";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <ExamProvider>
                <Stack.Navigator initialRouteName="Calendar">
                    <Stack.Screen name="Calendar" component={CalendarScreen}/>
                    <Stack.Screen name="List" component={ListScreen}/>
                </Stack.Navigator>
            </ExamProvider>
        </NavigationContainer>
    );
};

export default App;
