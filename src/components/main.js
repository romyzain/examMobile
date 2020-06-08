import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Tab from './tab';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerMode="none"
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Menu" component={Tab} />
    
        </Stack.Navigator>
    )
}