<script setup lang="ts">
import CalenderDays from "./CalenderDays.vue";
</script>

<template>
  <calender-days :date="new Date()" :days="7" />
</template>
