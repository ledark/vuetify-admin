<template>
  <v-app>
    <v-main>
      <v-system-bar></v-system-bar>
      <v-app-bar :elevation="2" title="Example"></v-app-bar>
      <v-navigation-drawer>
        Content-where
      </v-navigation-drawer>
      <div class="container text-center">app principal</div>
      <router-view />
      <v-footer>Copyright</v-footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
