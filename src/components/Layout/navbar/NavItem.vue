<script setup>

import {defineProps} from "vue";

defineProps({
  to: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <router-link
      :to="to"
      class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      :class="{'active' : active }">
    <slot></slot>
  </router-link>
</template>


<style lang="scss" scoped>
.active {
  @apply border-indigo-500 text-gray-900;
}
</style>