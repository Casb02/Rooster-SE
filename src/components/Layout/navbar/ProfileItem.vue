<script setup>
import { MenuItem, Menu } from '@headlessui/vue'

defineProps({
  to: {
    type: String,
    default: null,
    required: true
  }
})

</script>

<template>
  <MenuItem v-slot="{ active }">
    <router-link :to="to" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
      <slot/>
    </router-link>
  </MenuItem>
</template>
