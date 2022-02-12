<script setup>
import Navbar from "./components/Layout/Navbar.vue";
import Footer from "./components/Layout/Footer.vue";
import NavLink from "./components/UI/Navigation/NavLink.vue";

</script>

<template>
  <div class="site-content">
    <div class="main-content">
      <navbar brand-name="RoosterSE">
        <nav-link to="/">Home</nav-link>
        <nav-link to="/agenda">Agenda</nav-link>
        <nav-link to="/bs-test">Bootstrap Test</nav-link>
      </navbar>

      <router-view/>
    </div>

    <Footer class="footer"/>
  </div>

</template>

<style lang="scss">

.site-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  margin-bottom: 5rem;
}

.footer {
  margin-top: auto;
}


</style>
