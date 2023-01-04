import React, { useState } from "react";
import axios from 'react-native-axios'
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { styles } from "./style";
import { Entypo } from '@expo/vector-icons';
import { CardSkils } from "../../components/CardSkills";
import { Header } from "../../components/Header";

export const Home = () => {

    const [isSelectedModal, setIsSelectedModal] = useState(false);
    
    return(
        <View style={styles.container}>
            <Header />
            <CardSkils />
        </View>
    )
}