<template>

    <v-expansion-panels multiple variant="default" v-model="activePanel" >
        <template v-for="item in menu">

            <!--Collapse-->
                <v-expansion-panel >
                    <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <ul class="nav flex-column mt-3">
                            <template v-for="child in item.children">
                                <NavbarComponentItem v-bind="child" />
                            </template>
                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>

        </template>
    </v-expansion-panels>

</template>

<script setup lang="ts">
import NavbarComponentItem from './NavbarComponentItem.vue'
import SidebarMenu from '../collections/SidebarMenu'
import { ref } from 'vue';

const menu = ref(SidebarMenu)
const activePanel = ref([0])

</script>