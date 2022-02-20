<script setup lang="ts">
import {defineProps, ref} from "vue";
import {useUserStore} from "../../stores/user";
defineProps({
  brandName: {
    type: String,
    default: "Navbar"
  }
})

const userStore = useUserStore();

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">{{ brandName }}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarApp" aria-controls="navbarApp" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarApp">
        <ul class="navbar-nav">
          <slot></slot>
        </ul>
        <router-link to="/login" class="btn btn-primary ms-auto" v-show="!userStore.isLoggedIn">Login</router-link>
        <span class="nav-link btn btn-link ms-auto" @click="userStore.logout()" v-show="userStore.isLoggedIn">Logout</span>
      </div>
    </div>
  </nav>
</template>