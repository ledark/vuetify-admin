<template>
  <li class="nav-item">
    <router-link :to="to" :class="renderClass">{{title}}</router-link>
  </li>
</template>

<script>
export default {
  name: "NavbarComponentItem",
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
  computed: {
    renderClass() {
      return {
        "nav-link": true,
        'active': this.active,
        'disabled': this.disabled,
      };
    },
  }
};
</script>