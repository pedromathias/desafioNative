import React from "react";
import { View, Modal, ScrollView,  TouchableWithoutFeedback, Text,TouchableOpacity} from "react-native";
import { styles } from "./style";
import { Feather, FontAwesome, AntDesign, EvilIcons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export const ModalSkills = ({ isSelectedModal, setIsSelectedModal }) => {

   return (

      <Modal
         animationType="slide"
         transparent={true}
         visible={isSelectedModal}  
         onRequestClose={() => {
            setIsSelectedModal(false);
         }}>
         <TouchableWithoutFeedback
            onPress={() => setIsSelectedModal(false)}>
            <View style={styles.modalOverlay} />
         </TouchableWithoutFeedback>
         <View style={styles.modalContentView}></View>
         </Modal>
   )}