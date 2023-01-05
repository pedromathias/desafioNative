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
  FlatList,
} from "react-native";
import { styles } from "./style";
import { Entypo } from "@expo/vector-icons";
import { CardSkils } from "../../components/CardSkills";
import { Header } from "../../components/Header";
import { ModalSkills } from "../../components/modalSkills";
import { deleteByIdUserSkills, getUserSkills } from "../../services/apiUserSkills";
import { CardUserSkill } from "../../components/CardUserSkills";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSkills } from "../../services/apiSkills";
import { getUser } from "../../services/apiUser";

export const Home = () => {
  const [data, setData] = useState();
  const [userSkillsData, setUserSkillsData] = useState([]);

  const [reload, setReload] = useState(false);

  React.useEffect(() => {
    get();
  }, [reload]);

  const deleteUserSkill = async (id) => {
    await deleteByIdUserSkills(id)
    alert("vasco da gama");
    setReload(!reload);
  };

  const get = async () => {
    const id = await AsyncStorage.getItem("id");
    const response = await getUserSkills();
    const res = await getSkills();
    let idUserSkill = res.data.filter((idUsKill) => idUsKill.id)
    if (response.data != "") {
      let filterUserSkills = response.data.filter(
        (userSkill) => userSkill.user == id
      );
      let array = [];
      for (let i = 0; i < filterUserSkills.length; i++) {
        for (let j = 0; j < res.data.length; j++) {
          if (filterUserSkills[i].skill == res.data[j].id) {
            array.push(res.data[j]);
          }
        }
      }

      setUserSkillsData(array);
      console.log(array);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={userSkillsData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        renderItem={({ item }) => {
          return (
            <>
              <CardUserSkill
                name={item.name}
                description={item.description}
                imageUrl={item.imageUrl}
                version={item.version}
                deleteUserSkill={deleteUserSkill}
                id={item.id}
              />

              <View style={{ width: 30 }} />
            </>
          );
        }}
      />
    </View>
  );
};
