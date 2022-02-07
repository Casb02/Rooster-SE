<script setup>
import {defineProps} from "vue";
defineProps({
  type: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: String,
    default: ""
  },
});
</script>

<template>
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      <slot/>
    </label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           id="grid-last-name"
           :type="type"
           :placeholder="placeholder">
</template>

<style scoped>

</style>