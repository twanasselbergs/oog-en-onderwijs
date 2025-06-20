<template>
  <section class="py-12 pt-24">
    <div class="container mx-auto">
      <h2 class="mb-12 text-4xl font-bold">
        Wat
        <span class="text-green">anderen</span>
        over mij zeggen<span class="text-green">.</span>
      </h2>

      <div
        class="scrollbar-hide overflow-x-auto"
        ref="scrollRef"
        @scroll="onScroll">
        <div class="flex w-max gap-10">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="rounded-4xl w-128 h-96 bg-gray-50 px-6 py-6 flex-shrink-0 flex flex-col justify-between">
            <div>
              <p class="pb-8 font-bold">{{ testimonial.date }}</p>
              <p class="flex-1 overflow-y-auto h-48">
                "{{ testimonial.desc }}"
              </p>
            </div>
            <div class="testimonials-center flex justify-between mt-8">
              <div class="testimonials-center flex gap-3">
                <img
                  src="/img/header.jpg"
                  alt=""
                  class="h-12 w-12 rounded-full object-cover" />
                <div class="flex-col">
                  <p class="font-bold">{{ testimonial.author }}</p>
                  <p class="text-sm text-gray-400">{{ testimonial.from }}</p>
                </div>
              </div>
              <Icon
                icon="material-symbols:format-quote-rounded"
                class="text-green text-4xl" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center mt-8 gap-4">
        <div class=""></div>
        <button @click="scrollLeft" class="rounded-full text-green p-2">
          <Icon icon="material-symbols:chevron-left-rounded" class="text-3xl" />
        </button>
        <div class="relative w-64 flex items-center">
          <div
            class="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-gray-200"></div>
          <div
            class="absolute left-0 top-1/2 h-1.5 rounded-full bg-green transition-all duration-100"
            :style="{
              width: `${progress}%`,
              transform: 'translateY(-50%)',
            }"></div>
        </div>
        <button @click="scrollRight" class="rounded-full p-2 text-green">
          <Icon
            icon="material-symbols:chevron-right-rounded"
            class="text-3xl" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { testimonials } from "@/data/testimonials";

const scrollRef = ref<HTMLDivElement | null>(null);
const progress = ref(0);

function updateProgress() {
  const el = scrollRef.value;
  if (!el) return;
  const maxScroll = el.scrollWidth - el.clientWidth;
  const value = maxScroll === 0 ? 100 : (el.scrollLeft / maxScroll) * 100;
  progress.value = Math.max(0, Math.min(100, value));
}

function onScroll() {
  updateProgress();
}

function scrollLeft() {
  const el = scrollRef.value;
  if (!el) return;
  el.scrollBy({ left: -el.clientWidth / 1.2, behavior: "smooth" });
  setTimeout(updateProgress, 350);
}

function scrollRight() {
  const el = scrollRef.value;
  if (!el) return;
  el.scrollBy({ left: el.clientWidth / 1.2, behavior: "smooth" });
  setTimeout(updateProgress, 350);
}

onMounted(() => {
  updateProgress();
  scrollRef.value?.addEventListener("scroll", onScroll);
});
onUnmounted(() => {
  scrollRef.value?.removeEventListener("scroll", onScroll);
});
</script>
