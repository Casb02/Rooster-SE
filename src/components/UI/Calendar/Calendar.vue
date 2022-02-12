<script setup>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import nlLocale from '@fullcalendar/core/locales/nl';
import {reactive} from "vue";

const calendarOptions = reactive({
  plugins: [ timeGridPlugin, dayGridPlugin ],
  initialView: 'timeGridWeek',
  locale: nlLocale,
  height: 'auto',
  weekends: false,
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  slotMinTime: "07:00:00",
  slotMaxTime: "18:30:00",
})

</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>

<style lang="scss">
.fc-today-button .fc-button .fc-button-primary {
  background-color: #f5f5f5;
  color: #000;
}

.fc-button-group {
  background: aqua;
}
</style>