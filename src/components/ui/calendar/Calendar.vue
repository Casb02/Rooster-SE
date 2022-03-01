<script setup lang="ts">
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar'
import nlLocale from '@fullcalendar/core/locales/nl';
import {reactive, Ref, ref} from "vue";

const props = defineProps({
  initialView: {
    type: String,
    default: 'timeGridDay'
  },
  headerObject: {
    type: Object,
    default: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }
  },
})

let showWarning: Ref<boolean> = ref(true);

const calendarOptions = reactive({
  plugins: [ timeGridPlugin, dayGridPlugin, iCalendarPlugin ],
  initialView: props.initialView,
  locale: nlLocale,
  height: 'auto',
  weekends: false,
  headerToolbar: props.headerObject,
  slotMinTime: "07:00:00",
  slotMaxTime: "18:30:00",
  events: {
    url: 'https://myx-saxion.xedule.nl/api/InternetCalendar/feed/86e89394-2512-4dea-9e83-50f334fc13f5/33a27fbf-5fa1-467b-9318-a4dca77a7b45',
    format: 'ics'
  }
})

</script>
<template>
  <div class="alert alert-warning alert-dismissible" v-show="showWarning">
    <p>
      <strong>Warning!</strong> <br>
      This component is still under development. And only shows EHI1V.Sc
    </p>
    <button type="button" class="btn-close" @click="showWarning = false"/>
  </div>
  <full-calendar :options="calendarOptions" />
</template>

