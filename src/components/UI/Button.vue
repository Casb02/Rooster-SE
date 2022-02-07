<script setup>
import {defineProps} from "vue";
defineProps({
  color: {
    type: String,
    default: "#4F46E5"
  },
})

</script>

<template>
  <button class="btn-color text-white font-bold py-2 px-4 rounded">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
$bg-color: v-bind(color);

.btn-color {
  background-color: $bg-color;
}

</style>
