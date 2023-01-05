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
  TouchableOpacityProps,
  FlatList,
} from "react-native";
import { styles } from "./style";
import { Entypo, Feather } from "@expo/vector-icons";
import { getSkills, listaSkills } from "../../services/apiSkills";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserSkills } from "../../services/apiUserSkills";

export const CardUserSkill = ({
  name,
  version,
  description,
  imageUrl,
  deleteUserSkill,
  id,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoview}>
        <Image style={{ height: 80, width: 80 }} source={{ uri: imageUrl }} />
      </View>
      <View
        style={{ justifyContent: "center", alignContent: "center", width: 150 }}
      >
        <Text style={{color:'white', marginBottom:8}}>{name}</Text>
        <Text style={{color:'white', marginBottom:8}}>Version: {version}</Text>
        <Text style={{color:'white'}}>{description}</Text>
      </View>
      <View>
        <Feather
          style={{ alignSelf: "flex-end", marginTop: 15 }}
          onPress={() => deleteUserSkill(id)}
          name="trash"
          size={24}
          color="white"
        />
      </View>
    </View>
  );
};
