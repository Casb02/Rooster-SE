<script setup>
import {defineProps} from "vue";
defineProps({
  name: {
    type: String,
    default: "btn"
  },
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
  <div>
    <label :for="name" class="block text-sm font-bold text-gray-700">
      <slot></slot>
    </label>
    <div class="mt-1">
      <input :type="type" :name="name" :id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" :placeholder="placeholder" />
    </div>
  </div>
</template>

<style scoped>

</style>