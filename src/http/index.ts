import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", // define a URL base da API
    timeout: 1000, // define um tempo limite para as requisições
    headers: {
      // define os cabeçalhos das requisições
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  
  // cria uma função que usa o apiClient para fazer a requisição GET
  export function getUsers() {
    return apiClient.get("/users"); // retorna a promessa da requisição
  }

export default (app:any) => {
    app.axios = axios;
    app.$http = axios;
    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
}