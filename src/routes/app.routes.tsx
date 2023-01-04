import React from 'react';
import { Home } from '../screens/Home';

import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

export const AppRoutes = () => (
    <AppStack.Navigator screenOptions={{headerShown:false}}>
        <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
);