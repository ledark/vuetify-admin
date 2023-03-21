<template>
  <h1>Trocar a Senha</h1>
  <p>Preencha os campos abaixo para trocar sua senha.</p>
  <v-alert v-if="alert.message.length" :color="alert.color" class="mb-4">{{ alert.message }}</v-alert>
  <v-form id="change-password-form" @submit.prevent="handleSubmit">
    <v-text-field label="Senha Atual" type="password" v-model="currentPassword" required></v-text-field>
    <v-text-field label="Nova Senha" type="password" v-model="newPassword" required>
      <template #append-outer>
        <span :style="{ color: passwordColor }">{{ passwordStrength }}</span>
      </template>
    </v-text-field>
    <v-text-field label="Confirme a nova Senha" type="password" v-model="confirmPassword" required></v-text-field>
   <FormButtonLoading :action="trocarSenha()">Trocar Senha</FormButtonLoading>
  </v-form>
</template>

<script lang="ts">
import FormInputTextLoading from '@/components/FormInputTextLoading.vue';
import FormButtonLoading from '@/components/FormButtonLoading.vue';
import { changePassword } from '../http/index';
export default {
  components: {
    FormButtonLoading,
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      alert: {
        message: '',
        color: '',
      },
      
    };
  },
  computed: {
    passwordStrength() {
      if (this.newPassword.length < 8) {
        return 'danger';
      }
      if (this.newPassword.length < 12) {
        return 'warning';
      }
      return 'success';
    },
    passwordColor() {
      if (this.newPassword.length < 8) {
        return 'red';
      }
      if (this.newPassword.length < 12) {
        return 'orange';
      }
      return 'green';
    },
  },
  methods: {

    trocarSenha() {
      return () => {

        return changePassword(this.currentPassword, this.newPassword, this.confirmPassword)
          .then((response) => {
            this.setMessage(response.data.message, response.data.class);
            console.log('success', response.data);
          })
          .catch((error) => {
            console.log('error', error.message);
            this.setMessage(error.message, 'error');
          });

    // Return a new promise
      return new Promise((resolve, reject) => {

        

        // Use setTimeout to delay the resolution of the promise
        setTimeout(() => {
          // Call resolve with a message
          resolve(`Waited for ${2500} milliseconds`);
          this.setMessage('Senha trocada com sucesso!', 'info');
        }, 2500);

        
      });
    };

    

    },

    setMessage(message: string, color: string) {
      this.alert.message = message;
      this.alert.color = color;
    },

    validateLocalPassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.setMessage('As senhas não conferem!', 'error');
        return false;
      }
      if (this.newPassword.length < 8) {
        this.setMessage('A senha deve ter no mínimo 8 caracteres!', 'error');
        return false;
      }
      return true;
    },

    validateRemotePassword() {
      return true;
    },

    handleSubmit() {
      if (!this.validateLocalPassword()) {
        return;
      }
      if (!this.validateRemotePassword()) {
        return;
      }
      this.setMessage('Senha trocada com sucesso!', 'success');
      this.setMessage('Ainda não implementado', 'warning');
    },
  },
}
</script>

<style scoped>
#message {
 margin-top:15px;
}
</style>