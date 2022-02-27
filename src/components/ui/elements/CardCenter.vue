<script setup lang="ts">
defineProps({
  breakpoint: {
    type: String,
    default: 'col-sm-10 col-md-9 col-lg-8 col-xl-6'
  },
})
</script>

<template>
  <div class="container-fluid bg-login d-flex flex-column">
    <div class="row justify-content-center align-items-center flex-grow-1">
      <div class="row justify-content-center align-items-center flex-grow-1">
        <div :class="breakpoint">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>