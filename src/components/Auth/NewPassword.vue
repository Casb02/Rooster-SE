<script setup>
import {ref} from "vue";

const newPassword = ref("");
const newPasswordRepeat = ref("");
</script>

<template>
  <div class="login-form ">
    <div class="card">
      <h4 class="card-header">Maak nieuw wachtwoord</h4>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="pass1Input" class="form-label">Nieuw wachtwoord</label>
            <input type="password" class="form-control" id="pass1Input" v-model="newPassword">
          </div>
          <div class="mb-3">
            <label for="pass2Input" class="form-label">Herhaal wachtwoord</label>
            <input type="password" class="form-control" id="pass2Input" v-model="newPasswordRepeat">
          </div>
          <button type="submit" class="btn btn-primary">Verzenden</button>
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