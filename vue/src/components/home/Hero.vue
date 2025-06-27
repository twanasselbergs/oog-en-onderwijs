<template>
  <section class="py-24">
    <div class="container mx-auto flex items-center gap-12">
      <div class="flex-1">
        <p>van Nicolle Brüll</p>
        <h1 class="max-w-lg bg-white text-6xl font-bold">
          Welkom bij
          <span class="text-green">Oog</span>
          & Onderwijs<span class="text-green">.</span>
        </h1>
        <p class="max-w-md py-6 text-gray-400">
          Vanuit mijn achtergrond als medisch specialist, mijn didactische
          scholing en ervaring als Teach the Teacher trainer kan ik u helpen om
          een workshop op maat te maken.
        </p>
        <div class="flex flex-col items-start gap-16">
          <a
            href="/agenda"
            class="bg-green hover:bg-green/90 group flex items-center gap-2 rounded-full px-4 py-2 text-white transition-colors duration-300">
            <span class="font-bold">Bekijk Agenda</span>
            <Icon
              icon="material-symbols:arrow-circle-right-rounded"
              class="text-3xl transition-transform duration-300 group-hover:translate-x-2.5" />
          </a>
          <div class="flex gap-2">
            <p
              v-for="(item, index) in items"
              :key="index"
              class="rounded-full border border-neutral-400 px-4 py-2">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>

      <img
        src="/img/header.jpg"
        alt=""
        class="h-auto w-7/12 rounded-full object-cover shadow-md" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const items = [
  { label: "Lorem Ipsum" },
  { label: "Lor Ips" },
  { label: "Lorem" },
  { label: "Lorem Ipsum Dolor" },
];
</script>
