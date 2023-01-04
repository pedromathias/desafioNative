import React from "react";
import { Login } from "../screens/Login";
import { Cadastro} from "../screens/Cadastro";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

 export const AuthRoutes = () => (
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Cadastro" component={Cadastro} />
    </AuthStack.Navigator>
);