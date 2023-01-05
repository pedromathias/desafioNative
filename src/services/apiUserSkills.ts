import axios, { AxiosResponse } from "axios";

const apiUserSkills = axios.create({
  baseURL: " http://107.178.219.190:8080/api",
});

export interface listaUserSkills {
  knowledgeLevel: number;
  id: number;
  idUserSkill: number;
  createdAt: string;
  user: number;
}

export function getUserSkills(): Promise<AxiosResponse> {
  let url = `/userSkills`;

  return apiUserSkills.get(url);
}

export function getByIdUserSkills(id: number ): Promise<AxiosResponse> {
    let url = `/userSkills/${id}`;

  return apiUserSkills.get(url);
}

export function deleteByIdUserSkills(id: number ): Promise<AxiosResponse> {
    let url = `/userSkills/${id}`;

    console.log(id);
  return apiUserSkills.delete(url);
  
  
}
