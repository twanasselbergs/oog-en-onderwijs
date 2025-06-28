<template>
  <main>
    <section class="py-24 bg-green">
      <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        <div class="text-center">
          <p class="text-white text-sm">Home &gt; Agenda</p>
          <h1 class="text-5xl font-bold text-white pb-1">Agenda & Werkdagen</h1>
          <p class="text-white">De agenda van mijn werk</p>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-24">
      <h2 class="text-4xl font-bold mb-4">
        <span class="text-green">Overzicht</span>
        van activiteiten<span class="text-green">.</span>
      </h2>
      <p class="mb-6">
        Wilt u meer informatie over de lessen en cursussen die ik geef? Neem dan
        gerust
        <span class="text-green">contact</span>
        met mij op.
      </p>
      <div class="flex gap-2 mb-8">
        <button
          v-for="year in years"
          :key="year"
          @click="selectedYear = year"
          :class="[
            'rounded-full px-4 py-2 transition-colors duration-300 font-bold',
            selectedYear === year
              ? 'bg-green text-white'
              : 'bg-gray-100 text-green hover:bg-green/90 hover:text-white',
          ]">
          {{ year }}
        </button>
      </div>

      <div class="flex flex-col gap-12">
        <template v-for="(months, month) in agenda[selectedYear]" :key="month">
          <div>
            <h3
              class="text-2xl font-bold mb-4 text-green flex items-center gap-2">
              <span>{{ month }}</span>
              <span class="h-1 w-8 bg-green rounded-full"></span>
            </h3>
            <ul class="space-y-2">
              <li
                v-for="item in months"
                :key="item.date"
                class="bg-gray-50 rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-3">
                <span class="font-bold text-accent">{{ item.date }}</span>
                <span class="text-gray-700">{{ item.desc }}</span>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const years = [2025, 2024, 2023, 2022, 2021];
const selectedYear = ref(2025);

type AgendaItem = { date: string; desc: string };
type AgendaYear = Record<string, AgendaItem[]>;

const agenda: Record<number, AgendaYear> = {
  2025: {
    Mei: [{ date: "5 mei", desc: "Voorbeeldactiviteit 2023" }],
  },
  2024: {
    Maart: [{ date: "10 maart", desc: "Voorbeeldactiviteit 2024" }],
    April: [{ date: "12 april", desc: "Nog een activiteit 2024" }],
  },
  2023: {
    Juni: [{ date: "15 juni", desc: "Voorbeeldactiviteit 2022" }],
  },
  2022: {
    Juni: [{ date: "15 juni", desc: "Voorbeeldactiviteit 2022" }],
  },
  2021: {
    Maart: [
      {
        date: "11 maart",
        desc: "Teach the Teacher basis dag 1, UMCU (online)",
      },
    ],
    April: [
      { date: "8 april", desc: "Coach de Co, VUmc (online)" },
      { date: "13 april", desc: "Teach the Teacher basis dag 2, UMCU" },
    ],
    Mei: [
      {
        date: "20 mei",
        desc: "Maatwerktraining TTT, cardiologie Antonius Ziekenhuis, Nieuwegein",
      },
    ],
    September: [
      { date: "28 september", desc: "Teach the Teacher III, dag 1, UMCU" },
    ],
    Oktober: [
      {
        date: "11 oktober",
        desc: "Maatwerk training TTT Gynaecologie & Obstetrie, UMCU",
      },
      { date: "26 oktober", desc: "Maatwerk training TTT Cardiologie, UMCU" },
    ],
    November: [
      { date: "4 november", desc: "Maatwerk training TTT Cardiologie, UMCU" },
      { date: "25 november", desc: "Teach the Teacher basis dag 1, VUmc" },
    ],
    December: [
      { date: "16 december", desc: "Teach the Teacher basis dag 2, VUmc" },
    ],
  },
};
</script>
