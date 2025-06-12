<template>
  <section class="py-12">
    <div class="container mx-auto">
      <h2 class="my-12 text-5xl font-bold">Wie ben ik?</h2>

      <div class="grid scale-90 grid-cols-2 items-center gap-10">
        <div class="grid grid-cols-[1.25fr_0.75fr] gap-6">
          <img
            :src="items[0].src"
            alt=""
            class="rounded-4xl h-60 w-full object-cover shadow" />
          <img
            :src="items[1].src"
            alt=""
            class="rounded-4xl h-full w-full object-cover shadow" />
          <img
            :src="items[2].src"
            alt=""
            class="rounded-4xl col-span-2 h-60 w-full object-cover shadow" />
        </div>

        <div class="col-span-1">
          <img
            src="/img/header.jpg"
            alt=""
            class="rounded-4xl w-full scale-95 object-cover shadow" />
        </div>
      </div>

      <div
        class="rounded-4xl mt-16 flex items-center border border-neutral-200 bg-gray-50 px-20">
        <div class="flex-1">
          <h2 class="text-4xl font-bold">Over Nicolle</h2>
          <p class="max-w-lg py-6 text-gray-400">
            Wie ben ik? Arts, docent, moeder, partner, dochter... dat zijn
            antwoorden die vaak genoemd worden. Maar betekent dat niet vooral
            welke rol je hebt, wat je doet? Veel moeilijker is het om te
            beschrijven wie je echt bent. Anderen omschrijven mij als een
            enthousiasmerend, empathisch, vrolijk en vol levenslust. Een kundig
            docent die met praktische voorbeelden en op flexibele wijze kan
            inspelen op wat het publiek nodig heeft.
          </p>
          <RouterLink
            to="/contact"
            class="text-green inline-flex items-center gap-2 rounded-full">
            <span class="font-semibold">Lees verder</span>
            <Icon
              icon="material-symbols:arrow-circle-right-rounded"
              class="text-3xl" />
          </RouterLink>
        </div>

        <img
          src="/img/leaf.png"
          alt=""
          class="rounded-4xl w-5/12 scale-50 object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";

const items = ref([
  { src: "/img/header.jpg" },
  { src: "/img/header.jpg" },
  { src: "/img/header.jpg" },
]);
</script>
