<script setup lang="ts">

import {Ref, ref} from "vue";

//Class list from API
let classList: Ref<Array<string>> = ref(["EHI1v.SA", "EHI1v.SB", "EHI1v.SC","EHI1v.SD","EHI1v.IA","EHI1v.IB","EHI1v.BA"]);

//User inputs
const userEmail = ref<HTMLElement | null>(null);
const userPass = ref<HTMLElement | null>(null);
const username = ref<HTMLElement | null>(null);
const userPassCheck = ref<HTMLElement | null>(null);
const selectedClass = ref<HTMLElement | null>(null);


</script>

<template>
  <div class="card">
    <h4 class="card-header">Registreer</h4>
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-lg-6 border-register">
            <h4 class="mb-2 mb-md-4">Account gegevens</h4>
            <div class="mb-3">
              <label for="emailInput" class="form-label">Email address</label>
              <input type="email" class="form-control" id="emailInput" v-model="userEmail">
            </div>
            <div class="mb-3">
              <label for="passwordInput" class="form-label">Wachtwoord</label>
              <input type="password" class="form-control" id="passwordInput" v-model="userPass">
            </div>
            <div class="mb-3">
              <label for="password2Input" class="form-label">Herhaal wachtwoord</label>
              <input type="password" class="form-control" id="password2Input" v-model="userPassCheck">
            </div>
          </div>
          <div class="col-lg-6">
            <h4 class="mb-2 mb-md-4 mt-4 mt-lg-0">Profiel gegevens</h4>
            <div class="mb-3">
              <label for="usernameInput" class="form-label">Gebruikersnaam</label>
              <input type="password" class="form-control" id="usernameInput" v-model="username">

            </div>
            <div class="mb-3">
              <label for="klasInput" class="form-label">Klas</label>
              <select class="form-control form-select" id="klasInput" v-model="selectedClass">
                <option v-for="klas in classList" :value="klas">{{klas}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="mb-3 mt-3 form-check">
          <input type="checkbox" class="form-check-input" id="safeInfo">
          <label class="form-check-label" for="safeInfo">Ik ga akkoord met de <a href="">voorwaarden</a></label>
        </div>
        <button type="submit" class="btn btn-primary">Registreren</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'node_modules/bootstrap/scss/mixins';
@import '../../assets/scss/variables';

$line-color: lighten($brand-2, 30%);

.border-register {
  @include media-breakpoint-up(lg) {
    border-right: 1px solid $line-color;
  }
  @include media-breakpoint-down (lg) {
    border-bottom: 1px solid $line-color;
  }
}

</style>