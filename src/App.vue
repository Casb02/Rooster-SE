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
        <router-view class="site-view"/>

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
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .site-view {
    flex-grow: 1;
    @media (max-width: 992px) {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

}

.footer {
  margin-top: auto;
}


</style>
