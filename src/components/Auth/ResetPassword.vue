<script setup>

import {ref} from "vue";

const email = ref('');
</script>

<template>
  <div class="login-form ">
    <div class="card">
      <h4 class="card-header">Wachtwoord herstellen</h4>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="emailInput" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailInput" v-model="email">
          </div>
          <button type="submit" class="btn btn-primary">Verstuur</button>
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