<template>
<ul class="nav flex-column">
  <NavbarComponentItem to="/" title="Root" />
  <NavbarComponentItem to="/home" title="Home" />
  <NavbarComponentItem to="/dashboard" title="Dashboard" />
  <NavbarComponentItem to="/dashboard" title="Dashboard" :disabled="true" />
  <NavbarComponentItem to="/test/storage" title="Testing Storage" />
</ul>    
</template>

<script setup lang="ts">
    import NavbarComponentItem from './NavbarComponentItem.vue'

    /*
    export default {
        name: "TheSidebarMenu",
        components: {
            NavbarComponentItem
        }
    }
    */
</script>