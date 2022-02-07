<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Navbar from "./components/Layout/Navbar.vue";
import NavItem from "./components/Layout/components/NavItem.vue";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {ref} from "vue";

const isActive = ref(true);

</script>

<template>
  <Navbar>
    <template #items>
      <NavItem to="/" :active="isActive">Home</NavItem>
      <NavItem to="/">Test</NavItem>
      <NavItem to="/">123</NavItem>
    </template>

<!--    TODO: Make it less cluthert > subitems need SubMenu Component so the App.vue is small-->
    <template #profile>
      <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
        </MenuItem>
      </MenuItems>
    </template>
  </Navbar>
  <router-view/>
</template>

<style>
</style>
