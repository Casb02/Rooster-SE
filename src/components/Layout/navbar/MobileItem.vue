<script setup>
import { DisclosureButton } from '@headlessui/vue'
defineProps({
  to: {
    type: String,
    default: null,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
})
</script>

<template>

  <DisclosureButton
      as="router-link"
      :to="to"
      :class="active ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'"
  >
    <slot/>
  </DisclosureButton>


</template>

<style scoped>

</style>