import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { AuthProvider } from "./src/context/Auth";
import { Routes } from "./src/routes";
import { Cadastro } from "./src/screens/Cadastro";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <StatusBar style="light" />
      <Routes />
    </NavigationContainer>
    </AuthProvider>
  );
}
