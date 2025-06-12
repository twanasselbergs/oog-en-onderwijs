<template>
  <section class="bg-green/75 py-12">
    <div class="container mx-auto">
      <div class="rounded-4xl py-28">
        <div
          class="relative flex flex-col items-center justify-center gap-2 italic text-gray-50">
          <h2 class="max-w-3xl text-center text-3xl font-bold">
            "Het doel van het onderwijs is een lege geest vervangen door een
            open geest."
          </h2>
          <p>Malcolm Forbes, politicus</p>
          <Icon
            icon="material-symbols:format-quote-rounded"
            class="text-green/40 -z-1 absolute scale-[250%] text-9xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
