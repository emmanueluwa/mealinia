<script setup lang="ts">
import CalenderDays from "./CalendarDays.vue";
</script>

<template>
  <calender-days :date="new Date()" :days="7" />
</template>
