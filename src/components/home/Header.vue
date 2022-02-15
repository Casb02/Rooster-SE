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

  <div class="text-center mt-5">
    <h1>{{ title }}</h1> <br>
    <h2>{{ subtitle }}</h2>
    <slot/>
  </div>

</template>


<style scoped>

</style>