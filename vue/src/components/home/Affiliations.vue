<template>
  <section class="mt-12 bg-gray-50 pt-12 pb-16">
    <div class="container mx-auto text-center">
      <h2 class="mb-20 text-4xl font-bold">
        <span class="text-green">Organisaties</span>
        waar ik mee samenwerk<span class="text-green">.</span>
      </h2>
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
              class="h-16 w-auto rounded-full object-contain duration-300 hover:scale-[103%]" />
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
