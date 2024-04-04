<script lang="ts" setup>
//
</script>

<template>
  <v-layout>
    <v-container class="main">
      <!-- <AppBar /> -->
      <main><router-view /></main>
    </v-container>
    <v-footer app>
      <span class="text-light-orange">Meal planner</span>&nbsp;- &copy;
      {{ new Date().getFullYear() }}
    </v-footer>
  </v-layout>
</template>
