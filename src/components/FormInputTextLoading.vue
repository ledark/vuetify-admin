<template>
  
    <v-text-field
    v-model="value"
    loading
    label="Type characters to change the loader color"
    placeholder="Start typing..."
    >
    <template v-slot:loader>
        <v-progress-linear
        :active="isLoading"
        :model-value="progress"
        :color="color"
        absolute
        height="7"
        indeterminate
        ></v-progress-linear>
    </template>
    </v-text-field>
</template>

<script lang="ts">
export default {
  data: () => ({
    value: '',
    isLoading: false,
  }),

  computed: {
    progress () {
      return Math.min(100, this.value.length * 10)
    },
    color () {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    },
  },
}
</script>