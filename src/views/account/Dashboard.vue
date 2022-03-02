<script setup lang="ts">
import {useUserStore} from "../../store/userStore";
import Calendar from '../../components/ui/calendar/Calendar.vue'

const userStore = useUserStore();

const header = {
  left: 'today',
  center: 'title',
  right: 'next'
}

</script>

<template>
  <div class="container-fluid">
    <h1>Dashboard</h1>
    <div class="row">
      <div class="col-md-6 col-lg-6">
        <div class="mx-3">
          <h2>Welkom {{ userStore.username }}!</h2>
          <form>
            <div class="form-group">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-6">
                  <label for="name">Naam</label>
                  <input type="text" class="form-control" id="name" disabled v-model="userStore.username">
                </div>
                <div class="col-md-6">
                  <label for="klas">Klas</label>
                  <input type="text" class="form-control" id="klas" disabled v-model="userStore.klas">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6 col-lg-6">
        <div class="mx-3">
          <h2>Agenda</h2>
          <calendar initial-view="listWeek" :headerObject="header"/>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

</style>