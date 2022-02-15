<script setup>
defineProps({
  brandName: {
    type: String,
    default: "Navbar"
  }
})

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
        <router-link to="/login" class="btn btn-primary ms-auto">Login</router-link>
      </div>
    </div>
  </nav>
</template>