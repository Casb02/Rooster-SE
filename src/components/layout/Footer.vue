<script setup lang="ts">

</script>

<template>
  <div class="bg-brand-3">
    <div class="mt-5 mb-3">
      <div class="container text-brand-4 mb-4">
        <div class="row">
          <div class="col-sm-6 col-lg-2">
            <h5 class="mb-3 footer-header">Over</h5>

            <span class="footer-subheader">Backend Developer</span>
            <div class="footer-item">
              <a href="https://github.com/Pimmeul">Pim Meulenkamp</a>
            </div>
            <br>
            <span class="footer-subheader mt-4">Frontend Developer</span>
            <div class="footer-item">
              <a href="https://github.com/Casb02">Cas Boomkamp</a>
            </div>


          </div>
          <div class="col-sm-6 col-lg-4 mt-5 mt-sm-0 mb-3 mb-lg-0 ">
            <h5 class="mb-3 footer-header">Sitemap</h5>
            <span class="footer-item">
            <router-link to="/">Home</router-link> <br>
            <router-link to="/login">Login</router-link> <br>
            <router-link to="/register">Register</router-link> <br>
            <router-link to="/account">Account</router-link> <br>
          </span>
          </div>
        </div>
      </div>

      <div class="text-center copyright">
        <span>&copy; {{ new Date().getFullYear() }} - RoosterSE | Onofficiële rooster voor Saxion</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-item {
  font-size: 11px;
  a {
    color: #d4fdff;
    text-decoration: none;
    &:hover {
      color: #9e9e9e;
    }
  }

}
.footer-subheader {
  margin-bottom: .5rem;
  font-size: 13px;
}
.copyright {
  font-size: 11px;
  color: #9e9e9e;
}
</style>
