<template>
  <li class="nav-item">
    <router-link :to="to" :class="renderClass">{{title}}</router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'NavbarComponentItem',
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const renderClass = computed(() => {
      return {
        'nav-link': true,
        'active': props.active,
        'disabled': props.disabled,
      };
    });

    return {
      renderClass,
    };
  },
});
</script>