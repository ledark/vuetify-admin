<template>
    <div class="container-fluid m-0 p-0">
        <v-footer class="footer">
        <small>
            Copyright AD 369 @ 2023 &mdash; {{ to }} &mdash; All Rights Reserved
        </small>
    </v-footer>        
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import mydate from 'locutus/php/datetime/date';
export default {
    computed: {
        userData() {
            return useStore().state.authStore.userData
        },
    },
    data() {
        return {
            to: mydate('Y')
        }        
    }
}
</script>

<style scoped>
.footer {
    color: #CCC;
    text-align: center;
    padding: 10px;
    background-color: #f5f5f5;
    border-top: 1px solid #e5e5e5;
}
</style>