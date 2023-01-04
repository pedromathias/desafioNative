import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { styles } from "./styles";
import LogoNeki from "../../assets/image/logoneki.png"
import { getUser } from "../../services/apiUser";

export const Login = ({navigation}) => {

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    const [data, setData] =  useState()
    const [userData, setUserData] = useState() 

    let userMap =  new Map();

    userMap.set("users_map",userData);
   
    const onChangeLoginHandler = (login) => {
        setLogin(login);
      };
    
      const onChangePasswordHandler = (password) => {
        setPassword(password);
      };

    React.useEffect(() => {
        get()
    }, [])

    const get = async () => {
        const response = await getUser()
        if(response.data != ""){
            setUserData(response.data)
        // console.log(response.data);
        
        }
    }
    function Logar() {


        if(userMap.has(login && password)){
            alert('vasco')
        }else{
            alert('flamengo')
        }
}

const Cadastrar = () => {
    navigation.navigate("Cadastro")
}

    return (
        <View style={styles.container}>
            <Image style={styles.logoneki} source={LogoNeki} />
            <View>
            <TextInput onChangeText={onChangeLoginHandler} value={login} placeholder="Insira seu login" selectionColor={'black'} placeholderTextColor={'white'} style={styles.emailbox}></TextInput>
            <TextInput onChangeText={onChangePasswordHandler} value={password} placeholder="Insira sua senha" selectionColor={'black'} placeholderTextColor={'white'} style={styles.emailbox}></TextInput>
            </View>
            <TouchableOpacity  onPress={() => Logar()} style={styles.loginbutton}><Text style={{color:'white'}} >Entrar</Text></TouchableOpacity>
            <Text style={{textAlign:'center', marginTop:30, textDecorationLine:'underline', }}>Já possui uma conta?</Text>
            <TouchableOpacity  onPress={() => Cadastrar()} style={styles.loginbutton}><Text style={{color:'white'}} >Cadastre-se</Text></TouchableOpacity>
        </View>
    )
}