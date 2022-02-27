<script setup lang="ts">
import { computed } from "vue";
import {getAuth} from "firebase/auth";
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: null,
    required: true
  },
  loginOnly: {
    type: Boolean,
    default: false
  },
})

const showLoginOnly = computed(() => {
  return getAuth().currentUser !== null;
});

</script>

<template>
  <router-link class="nav-link" :disabled="disabled" href="#" :to="to" v-show="showLoginOnly">
    <slot/>
  </router-link>
</template>

<style scoped>

</style>