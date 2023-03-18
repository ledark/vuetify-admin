<template>
    <div>
      <h1>Resultados da Busca {{ search }}</h1>
      {{ results }}
      <pre>{{this.$store}}</pre>
    </div>
  </template>

<script>
export default {    
    name: "SearchView",
    computed: {
        search() {
            return this.$store.state.searchStore.search;
        },
        results() {
            return this.$store.state.searchStore.results;
        }
    },
};
</script>