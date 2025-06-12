<template>
  <section class="mt-24 border-neutral-200 bg-gray-50 py-24">
    <div class="container mx-auto text-center">
      <h2 class="mb-32 text-5xl font-bold">Samenwerkingen</h2>
      <div class="relative overflow-hidden">
        <div class="slide-animate flex w-max gap-12">
          <a
            v-for="affiliation in affiliations"
            :key="affiliation.href"
            :href="affiliation.href"
            target="_blank"
            rel="noopener noreferrer">
            <img
              :src="affiliation.src"
              alt=""
              class="h-20 w-auto rounded-full object-contain duration-300 hover:scale-[103%]" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { affiliations } from "@/data/affiliations";
</script>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.slide-animate {
  animation: slide 120s linear infinite;
}

.slide-animate:hover {
  animation-play-state: paused;
}
</style>
