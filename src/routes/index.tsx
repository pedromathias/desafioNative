import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { AuthContext } from "../context/Auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  const {auth} = React.useContext(AuthContext);
  const {setAuth} = React.useContext(AuthContext);

React.useEffect(() => {
    verificarLogin()
})

const verificarLogin = async () => {
    const a = await AsyncStorage.getItem("id")
    if(a != null || a != undefined){
        setAuth(true)
  }
}


  return auth ? <AppRoutes /> : <AuthRoutes />;

};
