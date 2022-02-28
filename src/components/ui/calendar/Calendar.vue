<script setup lang="ts">
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import nlLocale from '@fullcalendar/core/locales/nl';
import iCalendarPlugin from '@fullcalendar/icalendar';
import {reactive} from "vue";

const calendarOptions = reactive({
  plugins: [ timeGridPlugin, dayGridPlugin, iCalendarPlugin ],
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
  //generate random events between today and 7 days later
  events: {
    url: 'https://myx-saxion.xedule.nl/api/InternetCalendar/feed/86e89394-2512-4dea-9e83-50f334fc13f5/33a27fbf-5fa1-467b-9318-a4dca77a7b45/',
    format: 'ics'
  }
})


</script>
<template>
  <full-calendar ref="cal" :options="calendarOptions" />
</template>
