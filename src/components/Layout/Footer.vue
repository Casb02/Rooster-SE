<script setup>

</script>

<template>
  <div class="bg-brand-3">
    <div class="mt-5 mb-3">
      <div class="container text-brand-4 mb-4">
        <div class="row">
          <div class="col-lg-2">
            <h4 class="mb-3 footer-header">Sitemap</h4>
            <span class="footer-item">
            <router-link to="/">Home</router-link> <br>
            <router-link to="/agenda">Agenda</router-link> <br>
            <router-link to="/login">Login</router-link> <br>
            <router-link to="/bs-test">Componenten</router-link>
          </span>
          </div>
          <div class="col-lg-4 mt-5 mt-lg-0 mb-3 mb-lg-0">
            <h4 class="mb-3 footer-header">Over</h4>

            <h6>Backend Developer</h6>
            <div class="footer-item">
              <a href="https://github.com/Pimeul">Pim Meulenkamp</a>
            </div>

            <h6 class="footer-subheader mt-4">Frontend Developer</h6>
            <div class="footer-item">
              <a href="https://github.com/Casb02">Cas Boomkamp</a>
            </div>


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
.footer-header {
}

.footer-item {
  font-size: 14px;
  a {
    color: #d4fdff;
    text-decoration: none;
    &:hover {
      color: #9e9e9e;
    }
  }
  .footer-subheader {
    margin-bottom: .5rem;
    font-size: 1rem;
  }
}

.copyright {
  font-size: 11px;
  color: #9e9e9e;
}
</style>