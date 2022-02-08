<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Navbar from "./components/Layout/Navbar.vue";
import NavItem from "./components/Layout/navbar/NavItem.vue";
import ProfileItem from "./components/Layout/navbar/ProfileItem.vue";
import MobileItem from "./components/Layout/navbar/MobileItem.vue";

</script>

<template>
  <Navbar>
    <template #nav-items>
      <NavItem to="/" :active="true">Home</NavItem>
      <NavItem to="/agenda">Agenda</NavItem>
    </template>

    <template #mobile-items>
      <MobileItem to="/" :active="true">Home</MobileItem>
      <MobileItem to="/agenda" >Agenda</MobileItem>
    </template>

    <template #profile>
      <ProfileItem to="/">Jouw profiel</ProfileItem>
      <ProfileItem to="/">Instellingen</ProfileItem>
      <ProfileItem to="/">Log uit</ProfileItem>
    </template>
  </Navbar>

<!--  This is the main app view-->
  <router-view/>


</template>

<style>
</style>
