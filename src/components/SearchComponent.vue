<template>
    <form @submit.prevent.stop="search()" class="d-flex">
        <input @input="autoSearch()" class="form-control me-2" type="search" placeholder="Busca Rápida" aria-label="Search" v-model="input" />
        <button @click.prevent.stop="search()" class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
</template>

<script setup lang="ts">
import { getUsers } from "../http"; // importa a função
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const timeout = setTimeout(() => {}, 0);
const interval = ref(timeout);
const input = ref('');
const store = useStore();
const router = useRouter();

const autoSearch = () => {
    clearTimeout(interval.value);
    interval.value = setTimeout(() => {
        search();
    }, 1500);
};

const search = () => {
    clearTimeout(interval.value);
    store.dispatch('searchStore/search', input.value, { root: true });
    router.push('/admin/search')

    // chama a função e trata o resultado
    getUsers()
        .then((response) => {
            // faz alguma coisa com a resposta da API
            store.dispatch('searchStore/results', response.data, { root: true });
        })
        .catch((error) => {
            // faz alguma coisa com o erro da API
            console.error(error);
        });
};

/*
export default {
    name: "SearchComponent",
    data() {
        return {
            interval: null,
            input: '',
        }
    },
    methods: {
        autoSearch() {
            clearTimeout(this.interval);
            this.interval = setTimeout(() => {
                this.search();                
            }, 1500);
        },
        search() {
            clearTimeout(this.interval);
            this.$store.dispatch('searchStore/search', this.input, { root: true });
            this.$router.push('/search')

            

// chama a função e trata o resultado
getUsers()
  .then((response) => {
    // faz alguma coisa com a resposta da API
    this.$store.dispatch('searchStore/results', response.data, { root: true });
  })
  .catch((error) => {
    // faz alguma coisa com o erro da API
    console.error(error);
  });

        }
    }
};
*/
</script>