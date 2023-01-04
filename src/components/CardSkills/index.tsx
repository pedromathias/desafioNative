import React, { useEffect, useState } from "react";
import axios from 'axios'
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { styles } from "./style";
import { Entypo } from '@expo/vector-icons';
import { getSkills, listaSkills } from "../../services/apiSkills";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CardSkils = ({name, image}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Image style={styles.image} source={image} />
            <Text style={{textAlign:'center', color:'white', fontWeight:'bold'}}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}