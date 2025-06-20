<template>
  <section class="py-24">
    <div class="container mx-auto">
      <div class="flex items-center justify-between px-24">
        <div class="flex-col">
          <h2 class="my-12 text-4xl font-bold">
            Over
            <span class="text-green">Oog</span>
            & Onderwijs<span class="text-green">.</span>
          </h2>
          <p class="text-gray-400 max-w-lg">
            Wie ben ik? Arts, docent, moeder, partner, dochter... dat zijn
            antwoorden die vaak genoemd worden. Maar betekent dat niet vooral
            welke rol je hebt, wat je doet? Veel moeilijker is het om te
            beschrijven wie je echt bent. Anderen omschrijven mij als een
            enthousiasmerend, empathisch, vrolijk en vol levenslust. Een kundig
            docent die met praktische voorbeelden en op flexibele wijze kan
            inspelen op wat het publiek nodig heeft.
          </p>
        </div>
        <img
          src="/img/header.jpg"
          alt=""
          class="rounded-4xl w-128 h-auto object-cover" />
      </div>
      <div class="rounded-4xl mt-16 flex items-center bg-gray-50 p-16 px-36">
        <div class="flex-1">
          <h2 class="text-4xl font-bold">Wie ben ik?</h2>
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
            <span class="font-bold">Lees meer</span>
            <Icon
              icon="material-symbols:arrow-circle-right-rounded"
              class="text-3xl" />
          </RouterLink>
        </div>
        <img
          src="/img/wie-ben-ik.jpg"
          alt=""
          class="rounded-4xl w-86 h-96 object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
</script>
