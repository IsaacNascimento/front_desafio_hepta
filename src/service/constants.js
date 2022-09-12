import axios from "axios";

const API = 'https://back-desafio-hepta.herokuapp.com';
export const ApiTarefas = axios.create({  
    baseURL: API,
})