<template>
  <v-app>
    <TheHeader/>
      <v-navigation-drawer>
        <TheSidebarMenu/>
      </v-navigation-drawer>
      <v-main>
        <div class="container-fluid p-3">
          <router-view />
        </div>
        <TheFooter/>
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