<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-alert v-if="alert.message.length" :color="alert.color" class="mb-4">{{ alert.message }}</v-alert>
      <v-form @submit.prevent="onSubmit">
        <v-text-field
          v-model="login"
          :readonly="loading"
          class="mb-2"
          clearable
          label="Login"
        ></v-text-field>

        <v-text-field
          v-model="senha"
          :readonly="loading"
          clearable
          label="Password"
          placeholder="Digite sua Senha"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Entrar
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useStore } from 'vuex';
import { doLogin } from '@/http'
const store = useStore();
const loginForm = reactive(useStore().state.authStore.loginForm)
const login = ref(useStore().state.authStore.loginForm.login)
const senha = ref(useStore().state.authStore.loginForm.senha)
const loading = ref(false)
const form = ref(true)
const alert = reactive({
  message: '',
  color: '',
})

const onSubmit = () => {    
  store.dispatch('authStore/rememberUser', { login: login, senha: senha }, { root: true });
  updateFormData();
  console.log(login, senha);
  return doLogin(login.value, senha.value).then((response:any) => {    
    alert.message = response.data.message
    alert.color = response.data.class
    let token = response.data.userData.token
    store.dispatch('authStore/doLogin', token, { root: true });
  }).catch((error:any) => {
    alert.message = error.message
    alert.color = 'error'
  })


  if(login.value == 'admin' && senha.value == '123'){
      let userData = {}; //dados from api
      store.dispatch('authStore/doLogin', userData, { root: true });
  }
}

const updateFormData = () => {
  loginForm.login = store.state.authStore.loginForm.login
  loginForm.senha = store.state.authStore.loginForm.senha
}
</script>