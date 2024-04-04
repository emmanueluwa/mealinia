<script setup lang="ts">
import { useFormatDate } from "../composables/formatters";

interface Card {
  date: Date;
}

const props = defineProps<{ card: Card }>();
</script>

<template>
  <v-sheet class="d-flex justiify-space-between">
    <v-sheet class="ma-2 pa-2"
      ><h2 class="text-h2">{{ useFormatDate(card.date) }}</h2></v-sheet
    >
  </v-sheet>
</template>
