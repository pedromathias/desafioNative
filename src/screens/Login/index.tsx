import React, { useState } from "react";
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
import LogoNeki from "../../assets/image/logoneki.png";
import { getUser } from "../../services/apiUser";
import { AuthContext } from "../../context/Auth";

export const Login = ({ navigation }) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const [userData, setUserData] = useState();

  const {auth} = React.useContext(AuthContext);
  const {setAuth} = React.useContext(AuthContext);

  

  const onChangeLoginHandler = (login) => {
    setLogin(login);
  };

  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  React.useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const response = await getUser();
    if (response.data != "") {
      setUserData(response.data);
      // console.log(response.data);
    }
  };
  const Logar = async() => {
        const response = await getUser();
        let filterUserLogin = response.data.filter(
            (userlogin) => userlogin.login
          );
          let filterUserPassword = response.data.filter(
            (userpassword) => userpassword.password
          );
          
        if (response.data != "") {
            if(filterUserLogin == login && password != filterUserPassword){
                
                setAuth(true);
                
            }
          
            
          console.log(filterUserLogin);
        }
      };
  
  const Cadastrar = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logoneki} source={LogoNeki} />
      <View>
        <TextInput
          onChangeText={onChangeLoginHandler}
          value={login}
          placeholder="Insira seu login"
          selectionColor={"black"}
          placeholderTextColor={"white"}
          style={styles.emailbox}
        ></TextInput>
        <TextInput
          onChangeText={onChangePasswordHandler}
          value={password}
          placeholder="Insira sua senha"
          selectionColor={"black"}
          placeholderTextColor={"white"}
          style={styles.emailbox}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={() => Logar()} style={styles.loginbutton}>
        <Text style={{ color: "white" }}>Entrar</Text>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          marginTop: 30,
          textDecorationLine: "underline",
        }}
      >
        Já possui uma conta?
      </Text>
      <TouchableOpacity onPress={() => Cadastrar()} style={styles.loginbutton}>
        <Text style={{ color: "white" }}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};
