import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CalendarScreen from './views/CalendarScreen';
import ListScreen from './views/ListScreen';
import {ExamProvider} from "./context/ExamContext";
import DetailsScreen from "./views/DetailsScreen";
import {RootStackParamList} from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <ExamProvider>
                <Stack.Navigator initialRouteName="Calendar">
                    <Stack.Screen name="Calendar" component={CalendarScreen}/>
                    <Stack.Screen name="List" component={ListScreen}/>
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                </Stack.Navigator>
            </ExamProvider>
        </NavigationContainer>
    );
};

export default App;
