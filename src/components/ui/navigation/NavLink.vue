<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: null,
    required: true
  },
})
</script>

<template>
  <router-link class="nav-link" :disabled="disabled" href="#" :to="to">
    <slot/>
  </router-link>
</template>

<style scoped>

</style>