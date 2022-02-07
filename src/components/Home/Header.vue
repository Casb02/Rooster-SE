<script setup lang="ts">
import {defineProps} from "vue";

defineProps({
  title: {
    type: String,
    default: 'Header'
  },
  subtitle: {
    type: String,
    default: 'Default subtitle'
  }
});

</script>

<template>

  <div class="header">
    <h1>Header</h1>
    <h1>{{ title }}</h1> <br>
    <h2>{{ subtitle }}</h2>
  </div>

</template>


<style scoped>

</style>