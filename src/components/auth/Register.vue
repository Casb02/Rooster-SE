<script setup lang="ts">
import {reactive, Ref, ref} from "vue";
import router from "../../router";
import registerUser from "../../functions/firebase/registerUser";
import LoadingSpinner from "../ui/elements/LoadingSpinner.vue";

//Class list from API
let classList: Ref<Array<string>> = ref(["EHI1v.SA", "EHI1v.SB", "EHI1v.SC","EHI1v.SD","EHI1v.IA","EHI1v.IB","EHI1v.BA"]);

let accountCreatedSuccess: Ref<boolean> = ref(false);
let accountCreatedError: Ref<boolean> = ref(false);
let isLoading: Ref<boolean> = ref(false);


//User inputs
const registration = reactive({
  username: "",
  email: "",
  password: {
    password: "",
    passwordConfirm: ""
  },
  klas: "EHI1v.SC",
  checkbox: false
})

const errorMsg = reactive({
  username: {
    message: "Gebruikersnaam is niet geldig",
    show: false
  },
  email: {
    message: "Email is al in ongeldig formaat",
    show: false
  },
  password: {
    password: {
      message: "Wachtwoord moet minstens 8 karakters bevatten",
      show: false
    },
    passwordConfirm: {
      message: "Wachtwoorden komen niet overeen",
      show: false
    }
  },
  klas: {
    message: "Klas is niet gekozen",
    show: false
  },
  checkbox: {
    message: "Vul de voorwaarden in",
    show: false
  }
})

const validate = () => {
  accountCreatedError.value = false;
  accountCreatedSuccess.value = false;
  errorMsg.password.passwordConfirm.show = registration.password.password !== registration.password.passwordConfirm;
  errorMsg.password.password.show = registration.password.password.length < 8;
  errorMsg.username.show = registration.username.length < 3 || registration.username.length > 20;
  errorMsg.email.show = !registration.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{{1,3}\.\d{{1,3}\.\d{{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  errorMsg.klas.show = registration.klas === "";
  errorMsg.checkbox.show = !registration.checkbox;
  let hasError = errorMsg.username.show || errorMsg.email.show || errorMsg.password.password.show || errorMsg.password.passwordConfirm.show || errorMsg.klas.show || errorMsg.checkbox.show;
  return !hasError;
}

const submitRegistration = () => {
  isLoading.value = true;
  if(validate()) {
    registerUser(registration.email, registration.password.password, registration.username, registration.klas).then(() => {
      router.push("/account");
      accountCreatedSuccess.value = true;
    }).catch((error) => {
      console.log(error);
      accountCreatedError.value = true;
    }).finally(() => {
      isLoading.value = false;
    })
    //clear form
    registration.username = "";
    registration.email = "";
    registration.password.password = "";
    registration.password.passwordConfirm = "";
    registration.klas = "";
    registration.checkbox = false;
  }
}
</script>

<template>
  <div class="alert alert-success" v-show="accountCreatedSuccess">
    Er is een email verstuurd naar uw emailadres. Klik op de link om uw account te activeren. (mail is W.I.P)
  </div>
  <div class="alert alert-danger" v-show="accountCreatedError">
    Er is een fout opgetreden. Mogelijk bestaat dit account al.
  </div>
  <div class="alert alert-warning">
    <span>
      <strong>Let op!</strong>
    </span>
    <p>
      Alle acounts worden verwijderd, dit is een test applicatie.
      Gebruik geen wachtwoorden die je elders gebruikt. Desondanks, wachtwoorden worden encrypt op firebase.
    </p>
  </div>
  <div v-show="isLoading">
    <loading-spinner/>
  </div>
  <div class="card">
    <h4 class="card-header">Registreer</h4>
    <div class="card-body">
      <form @submit.prevent="submitRegistration">
        <div class="row">
          <div class="col-lg-6 border-register">
            <h4 class="mb-2 mb-md-4">Account gegevens</h4>
            <div class="mb-3">
              <label for="input-email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="input-email" v-model="registration.email">
              <div class="error" v-show="errorMsg.email.show">{{ errorMsg.email.message }}</div>
            </div>
            <div class="mb-3">
              <label for="input-password" class="form-label">Wachtwoord</label>
              <input type="password" class="form-control" id="input-password" v-model="registration.password.password">
              <div class="error" v-show="errorMsg.password.password.show">{{ errorMsg.password.password.message }}</div>
            </div>
            <div class="mb-3">
              <label for="input-password-check" class="form-label">Herhaal wachtwoord</label>
              <input type="password" class="form-control" id="input-password-check" v-model="registration.password.passwordConfirm">
              <div class="error" v-show="errorMsg.password.passwordConfirm.show">{{
                  errorMsg.password.passwordConfirm.message
                }}</div>
            </div>
          </div>
          <div class="col-lg-6">
            <h4 class="mb-2 mb-md-4 mt-4 mt-lg-0">Profiel gegevens</h4>
            <div class="mb-3">
              <label for="input-username" class="form-label">Gebruikersnaam</label>
              <input type="text" class="form-control" id="input-username" v-model="registration.username">
              <div class="error" v-show="errorMsg.username.show">{{ errorMsg.username.message }}</div>
            </div>
            <div class="mb-3">
              <label for="input-klas" class="form-label">Klas</label>
              <select class="form-control form-select" id="input-klas" v-model="registration.klas" disabled>
                <option v-for="klas in classList" :value="klas">{{klas}}</option>
              </select>
              <div class="error" v-show="errorMsg.klas.show">{{ errorMsg.klas.message }}</div>
            </div>
          </div>
        </div>
        <div class="mb-3 mt-3 form-check">
          <input type="checkbox" class="form-check-input" id="checkbox-terms" v-model="registration.checkbox">
          <label class="form-check-label" for="checkbox-terms">Ik ga akkoord met de <a href="">voorwaarden</a></label>
          <div class="error" v-show="errorMsg.checkbox.show">{{ errorMsg.checkbox.message }}</div>
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
