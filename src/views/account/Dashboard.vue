<script setup lang="ts">
import {useUserStore} from "../../store/userStore";

const userStore = useUserStore();

</script>

<template>
  <h1>Welkom op het dashboard!</h1>
  <ul>
    <li>Login : {{ userStore.isLoggedIn }}</li>
    <li>E-mail: {{ userStore.user.email }}</li>
    <li>Verified : {{ userStore.user.emailVerified }}</li>
    <li>Username : {{ userStore.username }}</li>
    <li>Klas : {{ userStore.klas }}</li>
  </ul>
</template>


<style scoped>

</style>