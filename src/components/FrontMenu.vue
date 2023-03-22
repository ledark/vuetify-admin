<template>
    <v-btn :color="color('/about')" to="/home">home</v-btn>
    <v-btn :color="color('/about')" to="/about">about</v-btn>
    <v-btn :color="color('/contact')" to="/contact">contact</v-btn>    
    <router-link to='/admin' >[dashboard]</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FrontMenu',
  props: {
    active: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const color = (path: string) => {
      return props.active === path ? 'primary' : ''
    }

    return {
      color,
    }
  },
})
  

</script>