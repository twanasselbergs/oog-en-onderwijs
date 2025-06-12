<template>
  <section class="py-12">
    <div class="container mx-auto">
      <h2 class="mb-12 text-5xl font-bold">Testimonials</h2>
      <div class="scrollbar-hide overflow-x-auto">
        <div class="flex w-max gap-10">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="rounded-4xl w-128 h-96 border border-neutral-200 bg-gray-50 px-6 py-6">
            <p class="pb-8 font-semibold">{{ testimonial.date }}</p>
            <p class="h-32 overflow-y-auto pb-3">"{{ testimonial.desc }}"</p>
            <div class="flex pb-16 text-yellow-400">
              <Icon
                icon="material-symbols:star-rounded"
                class="text-3xl"
                v-for="i in 5"
                :key="i" />
              <p class="text-sm font-bold">5</p>
            </div>
            <div class="testimonials-center flex justify-between">
              <div class="testimonials-center flex gap-3">
                <img
                  src="/img/header.jpg"
                  alt=""
                  class="h-12 w-12 rounded-full object-cover" />
                <div class="flex-col">
                  <p class="font-semibold">{{ testimonial.author }}</p>
                  <p class="text-sm text-gray-400">{{ testimonial.from }}</p>
                </div>
              </div>
              <Icon
                icon="material-symbols:format-quote-rounded"
                class="text-green text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { testimonials } from "@/data/testimonials";
</script>
