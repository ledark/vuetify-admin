<template>
  <v-app>
      <v-main>
        <div class="container-fluid p-3">
          <p>Layout do Site</p>
          <div class="container">
            <div class="card p-3 m-1">
              <router-view />
            </div>
          </div>
        </div>
      </v-main>
  </v-app>
</template>

<script setup lang="ts">
import clienteData from '@/collections/cliente'
  import TheSidebarMenu from '@/components/TheSidebarMenu.vue'
  import TheHeader from '@/components/TheHeader.vue'
  import TheFooter from '@/components/TheFooter.vue'
  import { ref, onMounted } from 'vue'

  const nomeFantasia = ref(clienteData.nomeFantasia)

</script>