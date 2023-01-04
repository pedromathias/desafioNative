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
import LogoNeki from "../../assets/image/logoneki.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/Auth";

export const Cadastro = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);
  const [hidePassConfirm, setHidePassConfirm] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const {auth} = React.useContext(AuthContext);
  const {setAuth} = React.useContext(AuthContext);

  const baseUrl = "http://107.178.219.190:8080";

  const onChangeLoginHandler = (login: string) => {
    setLogin(login);
  };

  const onChangePasswordHandler = (password: string) => {
    setPassword(password);
  };

  const onChangePasswordConfirmHandler = (passwordConfirm: string) => {
    setPasswordConfirm(passwordConfirm);
  };

  const onSubmitFormHandler = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/users`, {
        login,
        password,
      });
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
        setLogin("");
        setPassword("");
        setPasswordConfirm("");
        //SetAuth(true);

        await AsyncStorage.setItem("auth",setAuth(true))
      } else {
        throw new Error("An error has occurred");
      }
      await AsyncStorage.setItem("id",JSON.stringify(response.data));
      const id = await AsyncStorage.getItem("id");
      console.log(id);
      
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  };



  const CriarConta = () => {
    if (
      password == passwordConfirm
        ? onSubmitFormHandler()
        : alert("As senhas não coincidem")
    ) {
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logoneki} source={LogoNeki} />
      <View>
        <TextInput
          placeholder="Insira um login"
          value={login}
          onChangeText={onChangeLoginHandler}
          selectionColor={"black"}
          placeholderTextColor={"white"}
          style={styles.emailbox}
        ></TextInput>
        <TextInput
          placeholder="Insira uma senha"
          value={password}
          onChangeText={onChangePasswordHandler}
          selectionColor={"black"}
          placeholderTextColor={"white"}
          secureTextEntry={hidePass}
          style={styles.emailbox}
        />
        <TouchableOpacity
          style={styles.eyevisible}
          onPress={() => setHidePass(!hidePass)}
        >
          {hidePass ? (
            <Entypo name="eye" size={28} color="black" />
          ) : (
            <Entypo name="eye-with-line" size={28} color="black" />
          )}
        </TouchableOpacity>
        <TextInput
          placeholder="Confirme a senha"
          selectionColor={"black"}
          onChangeText={onChangePasswordConfirmHandler}
          value={passwordConfirm}
          placeholderTextColor={"white"}
          secureTextEntry={hidePassConfirm}
          style={styles.emailbox}
        />
        <TouchableOpacity
          style={styles.eyevisibledois}
          onPress={() => setHidePassConfirm(!hidePassConfirm)}
        >
          {hidePassConfirm ? (
            <Entypo name="eye" size={28} color="black" />
          ) : (
            <Entypo name="eye-with-line" size={28} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={CriarConta}
        disabled={isLoading}
        style={styles.loginbutton}
      >
        <Text style={{ color: "white" }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};
