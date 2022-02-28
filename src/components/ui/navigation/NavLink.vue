<script setup lang="ts">
import {useUserStore} from "../../../store/userStore";
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

const userStore = useUserStore();

</script>

<template>
  <router-link class="nav-link" :disabled="disabled" href="#" :to="to" v-show="!loginOnly || userStore.isLoggedIn">
    <slot/>
  </router-link>
</template>

<style scoped>

</style>