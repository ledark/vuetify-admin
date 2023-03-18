<template>
    <v-system-bar></v-system-bar>
    <v-app-bar :elevation="2" :title="nomeFantasia">
        <SearchComponent />
    </v-app-bar>    
</template>

<script setup lang="ts">
    import SearchComponent from '@/components/SearchComponent.vue'
    import clienteData from '@/collections/cliente'
    import { ref, onMounted } from 'vue'

    const nomeFantasia = ref(clienteData.nomeFantasia)

</script>