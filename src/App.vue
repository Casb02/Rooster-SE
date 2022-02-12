<script setup>
import Navbar from "./components/Layout/Navbar.vue";
import Footer from "./components/Layout/Footer.vue";
import NavLink from "./components/UI/Navigation/NavLink.vue";

</script>

<template>
  <div class="main-content">
    <navbar brand-name="RoosterSE">
      <nav-link to="/">Home</nav-link>
      <nav-link to="/agenda">Agenda</nav-link>
    </navbar>

    <router-view class="min"/>
    <Footer class="footer"/>
  </div>

</template>

<style lang="scss">
.main-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
}


</style>
