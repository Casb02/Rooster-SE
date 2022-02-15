<script setup lang="ts">
import {ref} from "vue";

const email = ref<HTMLElement | null>(null);
const password = ref<HTMLElement | null>(null);

</script>

<template>
  <div class="login-form ">
    <div class="card">
      <h4 class="card-header">Inloggen</h4>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="emailInput" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailInput" v-model="email">
          </div>
          <div class="mb-3">
            <label for="passwordInput" class="form-label">Wachtwoord</label>
            <input type="password" class="form-control" id="passwordInput" v-model="password">
            <span class="tz-small">Wachtwoord vergeten? <router-link to="/auth/password/reset">Reset je wachtwoord</router-link>.</span>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="safeInfo">
            <label class="form-check-label" for="safeInfo">Onthoud mij</label>
          </div>
          <div class="mb-3">
            <span class="tz-small">Nog geen account? <router-link to="/register">Registreer</router-link> een account.</span>
          </div>
          <button type="submit" class="btn btn-primary">Inloggen</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  max-width: 22rem;
  margin: 0 auto;
}
.tz-small {
  font-size: 0.7rem;
}
</style>