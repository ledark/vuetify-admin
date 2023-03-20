<template>
    <div class="text-center">
      <v-menu
        transition="scale-transition"
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="gray"
            v-bind="props"
          >
            <v-icon end icon="mdi-help-circle-outline"></v-icon>
            
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            v-bind="item.props"
          >
            <template v-if="isDivider(item.props)">
                <v-divider></v-divider>
            </template>

            <template v-if="isBold(item.props)">
                <v-list-item-title><strong>{{ item.title }}</strong></v-list-item-title>
            </template>

            <template v-else>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>

          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>

<script lang="ts">
import { isDivider, isBold, NavbarPropType } from '@/collections/NavbarButtons'
import items from '@/collections/NavbarButtons'

export default {
    props: {
        icon: {
            type: String,
            required: false
        }
    },
    //data with custom types
    data(): {
        items: NavbarPropType[]
        } { return {
            items: items
        }},
    methods: {
        isDivider: (props: any) => {
            return isDivider(props)
        },
        isBold: (props: any) => {
            return isBold(props)
        },
    }
}
</script>