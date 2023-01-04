import axios from "react-native-axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: `http://107.178.219.190:8080`,
});

export function FuncionarioAPIFunc(url) {
  const [carregando, setCarregando] = useState(true);
  const [dataFunc, setDataFunc] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setDataFunc(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return { dataFunc, carregando, error };
}