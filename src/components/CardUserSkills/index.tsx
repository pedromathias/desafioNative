import React, { useEffect, useState } from "react";
import axios from 'axios'
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { Entypo } from '@expo/vector-icons';
import { getSkills, listaSkills } from "../../services/apiSkills";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CardUserSkillProps extends TouchableOpacityProps{

    knowledgeLevel: number,
    id:number,
    idUserSkill:number,
    createdAt:string,
    user:number

}

export const CardUserSkill = ({knowledgeLevel,id,createdAt,user,idUserSkill} : CardUserSkillProps) => {




return(
    <View>

    </View>
)
}