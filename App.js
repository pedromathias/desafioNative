import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Cadastro } from "./src/screens/Cadastro";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <Home />
    </View>
  );
}
