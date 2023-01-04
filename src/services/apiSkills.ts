import axios, { AxiosResponse } from "axios";

const apiSkills = axios.create({
    baseURL: ' http://107.178.219.190:8080/api'
});

export interface listaSkills {
    
            id: number, 
            name : string,
            version: string,
            description : string,
            imageurl : string,
}

export function getSkills(): Promise<AxiosResponse> {
    let url = `/skills`;

    return apiSkills.get(url);
}