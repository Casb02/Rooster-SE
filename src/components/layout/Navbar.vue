<script setup lang="ts">
import router from "../../router";
import logUserOut from "../../functions/firebase/logUserOut";
import {useUserStore} from "../../store/userStore";

defineProps({
  brandName: {
    type: String,
    default: "Navbar"
  }
})

const userStore = useUserStore();

const logout = () => {
  logUserOut();
  router.push("/");
}

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-brand-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">{{ brandName }}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarApp" aria-controls="navbarApp" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarApp">
        <ul class="navbar-nav">
          <slot></slot>
        </ul>
        <ul class="navbar-nav ms-lg-auto">
          <router-link to="/login" class="btn btn-primary ms-auto" v-show="!userStore.isLoggedIn">Login</router-link>
          <span class="nav-link btn btn-link" @click="logout()" v-show="userStore.isLoggedIn">Logout</span>
        </ul>
      </div>
    </div>
  </nav>
</template>