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
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
export default {
    data() {
        return {
            login: this.$store.state.authStore.loginForm.login,
            senha: this.$store.state.authStore.loginForm.senha,
            loading: false,
            form: true
        }
    },
    methods: {
        onSubmit() {
            if(this.login == 'admin' && this.senha == '123'){
                let userData = {}; //dados from api
                this.$store.dispatch('authStore/rememberUser', { login: this.login, senha: this.senha }, { root: true });
                this.$store.dispatch('authStore/doLogin', userData, { root: true });
                //this.$router.push({ path: '/' });
            }
        }
    }
}
</script>