<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import NavLink from "./components/ui/navigation/NavLink.vue";
import {Ref, ref} from "vue";
import {useUserStore} from "./stores/user";

let hideDev: Ref<boolean> = ref(false);
let userStore = useUserStore();

</script>

<template>
  <div class="site-content">
    <div class="main-content">
      <div v-if="!hideDev" class="dev-banner rounded-bottom">
      <span class="bg-danger px-2 py-1">Development mode - {{userStore.isLoggedIn ? "Gebruiker ingelogd" : "Niet ingelogd"}}</span>
      <span @click="hideDev = true" class="ms-3 bg-white px-2 py-1">❌</span>
      </div>
      <Navbar brand-name="RoosterSE">
        <nav-link to="/">Home</nav-link>
        <nav-link to="/agenda">Agenda</nav-link>
        <nav-link to="/account" login-only="true">Account</nav-link>
      </Navbar>
        <router-view class="site-view"/>

    </div>

    <Footer class="footer"/>
  </div>

</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/mixins/breakpoints";
@import "node_modules/bootstrap/scss/bootstrap";
.dev-banner {
  background: rgb(220, 53, 69);
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 50px;
  margin-bottom: -15px;
}

.site-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .site-view {
    flex-grow: 1;
    padding-top: 1rem;
    min-height: 50vh;
    @media (max-width: 992px) {
      padding-top: 2rem;
    }
    padding-bottom: 4rem;
  }
}

.footer {
  margin-top: auto;
}


</style>
