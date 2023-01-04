import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { styles } from "./styles";
import LogoNeki from "../../assets/image/logoneki.png"

export const Login = () => {

    return (
        <View style={styles.container}>
            <Image style={styles.logoneki} source={LogoNeki} />
            <View>
            <TextInput placeholder="Insira seu email" selectionColor={'black'} placeholderTextColor={'white'} style={styles.emailbox}></TextInput>
            <TextInput placeholder="Insira sua senha" selectionColor={'black'} placeholderTextColor={'white'} style={styles.emailbox}></TextInput>
            </View>
            <TouchableOpacity style={styles.loginbutton}><Text style={{color:'white'}} >Entrar</Text></TouchableOpacity>
        </View>
    )
}