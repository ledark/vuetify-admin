<template>
    <div>
      <h1>Resultados da Busca {{ search }}</h1>
      {{ results }}
      <pre>{{store}}</pre>
    </div>
  </template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const search = computed(() => store.state.searchStore.search);
const results = computed(() => store.state.searchStore.results);

</script>