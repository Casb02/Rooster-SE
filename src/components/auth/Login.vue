<script setup lang="ts">
import {Ref, ref} from "vue";
import LoadingSpinner from "../ui/elements/LoadingSpinner.vue";
import router from "../../router";
import {useUserStore} from "../../stores/user";
import logUserIn from "../../functions/firebase/loginUser";


const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const isError: Ref<boolean> = ref(false);
const errorMessage: Ref<string> = ref("");
const userStore = useUserStore();
const isLoading: Ref<boolean> = ref(false);


const login = () => {
  isLoading.value = true;
  isError.value = false;
  if (email.value && password.value.length >= 6) {

    logUserIn(email.value, password.value).then((user) => {
      userStore.setUser(user);
      router.push("/account");
    }).catch((error) => {
      if(error.code === "auth/user-not-found") errorMessage.value = "Deze gebruiker bestaat niet, \n maak een account aan.";
      if(error.code === "auth/wrong-password") errorMessage.value = "Combinatie email/wachtwoord is onjuist.";
      isError.value = true;
    }).finally(() => {
      isLoading.value = false;
    });

  } else {
    errorMessage.value = "Vul een geldig emailadres en wachtwoord in.";
    isError.value = true;
  }
}

</script>

<template>
  <div class="login-form ">
    <div class="alert alert-danger text-center" v-show="isError">
      {{errorMessage}}
    </div>
    <loading-spinner :v-if="isLoading"/>
    <div class="card">
      <h4 class="card-header">Inloggen</h4>
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="input-email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="input-email" v-model="email">
          </div>
          <div class="mb-3">
            <label for="input-password" class="form-label">Wachtwoord</label>
            <input type="password" class="form-control" id="input-password" v-model="password">
            <span class="tz-small">Wachtwoord vergeten? <router-link to="/auth/password/reset">Reset je wachtwoord</router-link>.</span>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="input-remember">
            <label class="form-check-label" for="input-remember">Onthoud mij</label>
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
  max-width: 27rem;
  margin: 0 auto;
}
.tz-small {
  font-size: 0.7rem;
}
</style>