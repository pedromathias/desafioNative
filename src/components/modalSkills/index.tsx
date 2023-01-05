import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./style";
import {
  Feather,
  FontAwesome,
  AntDesign,
  EvilIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { getSkills, listaSkills } from "../../services/apiSkills";
import { CardSkils } from "../CardSkills";
import { AuthContext } from "../../context/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ModalSkills = ({ isSelectedModal, setIsSelectedModal }) => {
  const [data, setData] = useState();
  const [skillsData, setSkillsData] = useState();

  const { auth } = React.useContext(AuthContext);
  const { setAuth } = React.useContext(AuthContext);

  const LogOut = () => {
    AsyncStorage.clear();
    setAuth(false);
  };

  React.useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const response = await getSkills();
    if (response.data != "") {
      setSkillsData(response.data);
      // console.log(response.data);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSelectedModal}
      onRequestClose={() => {
        setIsSelectedModal(false);
      }}
    >
      <TouchableWithoutFeedback onPress={() => setIsSelectedModal(false)}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContentView}>
        <View style={{ width: "100%", marginBottom: 20, flexDirection: "row" }}>
          <AntDesign
            onPress={() => setIsSelectedModal(false)}
            name="arrowleft"
            size={28}
            color="white"
          />
          <Text style={{ fontSize: 20, color: "white", marginLeft: 70 }}>
            Selecione sua Skill
          </Text>
        </View>
        <FlatList
          data={skillsData}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <>
                <CardSkils id={item.id} name={item.name} image={{ uri: item.imageUrl }} />

                <View style={{ width: 30 }} />
              </>
            );
          }}
        />

        <Entypo
          onPress={LogOut}
          style={{ position: "absolute", right: 20, bottom: 20 }}
          name="log-out"
          size={30}
          color="white"
        />
      </View>
    </Modal>
  );
};
