import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { styles } from "./style";
import { Entypo } from "@expo/vector-icons";
import { getSkills, listaSkills } from "../../services/apiSkills";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CardSkils = ({ name, image, id }) => {

    const [userId, setUserId] = useState(null);
    const [userSkill, setUserSkill] = useState();

    const [reload, setReload] = useState(false);


    const getCurrentDate = () => {
        const date = new Date().toJSON().slice(0, 10); 
        return date
    };

    const handleUserId = async () => {
       const a = await AsyncStorage.getItem('id')
        setUserId(a);
        
            }

            useEffect(() => {handleUserId()})

    const Postskilluser = { 
        knowledgeLevel: 0,
        user: userId,
        createdAt: getCurrentDate(),
        skill : id
    }
  const baseUrl = "http://107.178.219.190:8080";

  const postUserSkill = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/userSkills`, 
        Postskilluser,
        
      )     
      } 
    catch(err){
        console.log(err)
        console.log(Postskilluser);
        
            
        alert("Não foi possível selecionar a categoria, tente novamenta mais tarde.")
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={postUserSkill}>
        <Image style={styles.image} source={image} />
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
