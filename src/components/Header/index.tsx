import React, { useState } from "react";
import axios from "react-native-axios";
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
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ModalSkills } from "../modalSkills";

export const Header = () => {

    const [isSelectedModal, setIsSelectedModal] = useState(false);
  return (
    <View style={styles.header}>    
      <AntDesign onPress={() => setIsSelectedModal(true)} style={styles.addskill} name="plus" size={28} color="white" />
      <ModalSkills isSelectedModal={isSelectedModal} setIsSelectedModal={setIsSelectedModal} />
    </View>
  );
};
