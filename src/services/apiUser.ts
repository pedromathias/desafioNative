import axios, { AxiosResponse } from "axios";

const apiUser = axios.create({
    baseURL: ' http://107.178.219.190:8080/api'
});

export interface userList {
    
            id: number, 
            login : string,
            password: string,
}

export function getUser(): Promise<AxiosResponse> {
    let url = `/users`;

    return apiUser.get(url);
}