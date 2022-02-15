<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import NavLink from "./components/ui/navigation/NavLink.vue";
import {Ref, ref} from "vue";

let hideDev: Ref<Boolean> = ref(false);

</script>

<template>
  <div class="site-content">
    <div class="main-content">
      <div v-if="!hideDev" class="dev-banner">
      <span>Development mode</span>
      <span @click="hideDev = true" class="ms-2">❌</span>
      </div>
      <navbar brand-name="RoosterSE">
        <nav-link to="/">Home</nav-link>
        <nav-link to="/agenda">Agenda</nav-link>
      </navbar>
        <router-view class="site-view"/>

    </div>

    <Footer class="footer"/>
  </div>

</template>

<style lang="scss">

.dev-banner {
  background: #900303;
  height: 30px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
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
