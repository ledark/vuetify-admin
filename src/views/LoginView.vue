<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
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
          placeholder="Enter your password"
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
          Sign In
        </v-btn>
        <v-btn @click="updateFormData()" >update</v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
const loginForm = reactive(useStore().state.authStore.loginForm)
const login = ref(useStore().state.authStore.loginForm.login)
const senha = ref(useStore().state.authStore.loginForm.senha)
const loading = ref(false)
const form = ref(true)

const onSubmit = () => {    
  store.dispatch('authStore/rememberUser', { login: login, senha: senha }, { root: true });
  updateFormData();
  console.log(login, senha);
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