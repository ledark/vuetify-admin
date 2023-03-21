<template>
  <v-btn type="submit" color="primary"
    :disabled="isLoading"
    :loading="isLoading"
    @click.prevent.stop="handleClick"
  >
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
export default {
  data: () => ({
    isLoading: false,
  }),

  props: {
    action: {
      type: Function,
      required: true,
    },
  },

  methods: {
    handleClick () {
      this.isLoading = true
      this.action()
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
  },
}
</script>