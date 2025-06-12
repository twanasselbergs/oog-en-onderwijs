<template>
  <header
    class="z-49 container sticky top-6 mx-auto rounded-full border border-neutral-200 bg-gray-50 py-4">
    <nav class="flex items-center justify-between px-10">
      <div>
        <RouterLink to="/">
          <img src="/img/logos/logo.png" alt="" class="h-auto w-10" />
        </RouterLink>
      </div>
      <ul class="hidden items-center gap-10 text-lg font-semibold lg:flex">
        <li v-for="item in navItems" :key="item.href">
          <RouterLink :to="item.href">{{ item.label }}</RouterLink>
        </li>
        <RouterLink
          to="/contact"
          class="rounded-full bg-black px-4 py-1 font-normal text-white">
          Contact
        </RouterLink>
      </ul>
      <button class="lg:hidden" @click="toggleMenu">
        <Icon icon="material-symbols:menu-rounded" class="text-3xl" />
      </button>
    </nav>
  </header>

  <div
    :class="[
      'fixed right-0 top-0 z-50 h-full w-64 transform rounded-l-2xl bg-gray-100 transition-transform duration-500 ease-in-out',
      isOpenMenu ? 'translate-x-0' : 'translate-x-full',
    ]">
    <ul class="flex flex-col items-center gap-9 pt-40 text-xl font-semibold">
      <li v-for="item in navItems" :key="item.href">
        <RouterLink :to="item.href" @click="closeMenu">
          {{ item.label }}
        </RouterLink>
      </li>
      <RouterLink
        to="/contact"
        class="rounded-full bg-black px-4 py-1.5 text-white"
        @click="closeMenu">
        Contact
      </RouterLink>
    </ul>
  </div>

  <div
    class="fixed inset-0 z-40 bg-black transition-opacity duration-500 ease-in-out"
    :class="{
      'opacity-20 pointer-events-auto': isOpenMenu,
      'opacity-0 pointer-events-none': !isOpenMenu,
    }"
    @click="closeMenu"
    aria-label="close"
    aria-hidden="true"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

import { navItems } from "@/data/navItems";

const isOpenMenu = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};

const closeMenu = () => {
  isOpenMenu.value = false;
};
</script>
