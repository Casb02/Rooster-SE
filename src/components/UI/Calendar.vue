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
  @apply inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}

.fc-button-group {
  background: aqua;
}
</style>