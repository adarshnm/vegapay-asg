import axios, { AxiosResponse } from "axios";
import URLS from "../constants/urls.constants";
import { Records } from "../types/types";

const headers = {
    Authorization: 'Bearer ' + import.meta.env.VITE_AUTH_TOKEN
}


export const getUsers = (): Promise<AxiosResponse<IUser[]>> => {
    return axios.get(URLS.GET_USERS, { headers });
};

export const searchCustomers = (data: any): Promise<AxiosResponse<Records>> => {
    return axios.post(URLS.SEARCH, data, { headers });
};