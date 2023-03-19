<template>
    <div class="container-fluid">
        <v-divider/>
        <v-footer>            
        <p>
            Copyright
            <pre>{{ userData }}</pre>
        </p>
    </v-footer>        
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
const userData = computed(() => useStore().state.authStore.userData);
</script>