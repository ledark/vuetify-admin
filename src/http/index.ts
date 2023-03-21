import axios from 'axios';
import server from '../collections/server';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const apiClient = axios.create({
    baseURL: server.api,
    timeout: 10000,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  });
    
  // cria uma função que usa o apiClient para fazer a requisição GET
  export function getUsers() {
    return apiClient.get("/users"); // retorna a promessa da requisição
  }

export function doLogin(username: string, password: string) {
  let postData = {
    username: username,
    password: password
  };
  return apiClient.post('/api/login', postData)
}

export const validateToken = async (token: string) => {
  return await apiClient.get('/api/jwtvalidate?token='+token+'&pwd=')
}

export function changePassword(oldPassword: string, newPassword: string, confirmationPassword: string) {
  let postData = {
    oldPassword: oldPassword,
    newPassword: newPassword,
    confirmationPassword: confirmationPassword
  };
  return apiClient.post('/api/samples/change-password', postData)
}

export default (app:any) => {
    app.axios = axios;
    app.$http = axios;
    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
}