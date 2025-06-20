<template>
  <section class="py-20 bg-green mx-8 rounded-4xl text-white">
    <div class="container mx-auto">
      <h2 class="mb-3 text-4xl font-bold text-center">Mijn diensten</h2>
      <p class="text-center mb-20">
        Hieronder ziet u een overzicht van de diensten die ik lever.
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center mx-48">
        <div v-for="(service, index) in services" class="w-full max-w-sm h-64">
          <div class="flex gap-2">
            <Icon :icon="service.icon" class="text-3xl" />
            <h3 class="font-bold mb-4 text-lg">{{ service.title }}</h3>
          </div>
          <p class="">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { services } from "@/data/services";
</script>
