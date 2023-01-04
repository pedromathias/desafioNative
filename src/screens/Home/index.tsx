import React, { useState } from "react";
import axios from 'react-native-axios'
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { styles } from "./style";
import { Entypo } from '@expo/vector-icons';
import { CardSkils } from "../../components/CardSkills";
import { Header } from "../../components/Header";
import { ModalSkills } from "../../components/modalSkills";

export const Home = () => {

    return(
        <View style={styles.container}>
            <Header />
        </View>
    )
}