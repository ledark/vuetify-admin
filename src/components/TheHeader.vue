<template>
    <v-system-bar></v-system-bar>
    <v-app-bar :elevation="2" prominent>
        <!--<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
        <v-toolbar-title>{{ nomeFantasia }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <SearchComponent />
        <NavbarButtons icon="mdi-progress-question"></NavbarButtons>
    </v-app-bar>
</template>

<script setup lang="ts">
    import NavbarButtons from '@/components/NavbarButtons.vue'
    import SearchComponent from '@/components/SearchComponent.vue'
    import clienteData from '@/collections/cliente'
    import { ref, onMounted, watch } from 'vue'

    const nomeFantasia = ref(clienteData.nomeFantasia)
    const drawer = ref(false)
    const group = ref(null)
    watch(group, (val) => {
        console.log(val)
    })

</script>


<style scoped>
  .bg-sidebar {
    background-color: #2bc7db;
  }
</style>