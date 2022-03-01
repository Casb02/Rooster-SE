<script setup lang="ts">
import {useUserStore} from "../../store/userStore";
import Calendar from '../../components/ui/calendar/Calendar.vue'

const userStore = useUserStore();

const header = {
  left: 'prev,next today',
  center: '',
  right: 'title'
}

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-lg-7">
        <h1>Welkom op het dashboard!</h1>
        <ul>
          <li>Login : {{ userStore.isLoggedIn }}</li>
          <li>E-mail: {{ userStore.user.email }}</li>
          <li>Verified : {{ userStore.user.emailVerified }}</li>
          <li>Username : {{ userStore.username }}</li>
          <li>Klas : {{ userStore.klas }}</li>
        </ul>
      </div>
      <div class="col-md-6 col-lg-5">
        <calendar initial-view="timeGridDay" :headerObject="header"/>
      </div>
    </div>
  </div>

</template>


<style scoped>

</style>