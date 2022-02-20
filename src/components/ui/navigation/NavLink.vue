<script setup lang="ts">
import {computed, defineProps} from "vue";
import {useUserStore} from "../../../stores/user";
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

const showLoginOnly = computed(() => {
  return !(props.loginOnly && !userStore.isLoggedIn);
});

</script>

<template>
  <router-link class="nav-link" :disabled="disabled" href="#" :to="to" v-show="showLoginOnly">
    <slot/>
  </router-link>
</template>

<style scoped>

</style>