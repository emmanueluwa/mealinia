<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import CalenderCard from "./CalenderCard.vue";

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
  days: {
    type: Number,
    required: false,
    default: 7,
  },
});

interface Card {
  date: Date;
  content: string;
}

const generateCards = (startDate: Date, numberOfDays: number): Card[] => {
  const cards: Card[] = [];
  const currentDate = new Date(startDate);

  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(currentDate.getTime());
    const content = `Card ${i + 1}`;
    cards.push({ date, content });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return cards;
};

const cards = ref<Card[]>(generateCards(props.date, props.days));

const dialogVisible: Ref<boolean> = ref(false);
const dateSelected: Ref<Date | null> = ref(null);
const recipeDialogOpen = (card: Card): void => {
  dateSelected.value = card.date;
  dialogVisible.value = true;
};

const recipeDialogClose = (card: Card): void => {
  dateSelected.value = null;
  dialogVisible.value = false;
};
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Upcoming days</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="card in cards" :key="card.date.toString()">
        <td class="py-4">
          <calender-card :card="card" @daySelected="recipeDialogOpen" />
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-dialog v-model="dialogVisible" scrollable>
    <v-card>
      <v-card-title> Search for a recipe to add 😋</v-card-title>
      <v-card-actions>
        <v-btn color="primary" block @click="recipeDialogClose"
          >Close Dialog</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
