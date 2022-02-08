<script setup>
import Navbar from "./components/Layout/Navbar.vue";
import NavItem from "./components/Layout/navbar/NavItem.vue";
import ProfileItem from "./components/Layout/navbar/ProfileItem.vue";
import MobileItem from "./components/Layout/navbar/MobileItem.vue";
import Footer from "./components/Layout/Footer.vue";

</script>

<template>
  <div class="main-content">
    <Navbar>
      <template #nav-items>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/agenda">Agenda</NavItem>
      </template>

      <template #mobile-items>
        <MobileItem to="/">Home</MobileItem>
        <MobileItem to="/agenda" >Agenda</MobileItem>
      </template>

      <template #profile>
        <ProfileItem to="/">Jouw profiel</ProfileItem>
        <ProfileItem to="/">Instellingen</ProfileItem>
        <ProfileItem to="/">Log uit</ProfileItem>
      </template>
    </Navbar>

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
