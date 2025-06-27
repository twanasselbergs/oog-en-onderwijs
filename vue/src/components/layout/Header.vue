<template>
  <header
    :class="[
      'z-49 sticky top-0 py-6 px-12 bg-white rounded-full transition-all duration-500 mx-12',
      isScrolled ? 'shadow top-4' : '',
    ]">
    <nav class="flex items-center justify-between px-10">
      <div class="flex-1">
        <RouterLink to="/">
          <img
            src="/img/logos/logo.png"
            alt=""
            :class="[
              'transition-all duration-500 h-auto',
              isScrolled ? 'w-12' : 'w-16',
            ]" />
        </RouterLink>
      </div>
      <ul
        class="hidden flex-1 justify-center items-center gap-10 text-xl font-semibold lg:flex">
        <li v-for="item in navItems" :key="item.href" class="relative">
          <RouterLink
            :to="item.href"
            class="hover:text-green transition-colors duration-300"
            :class="{
              'text-green': route.path === item.href,
            }">
            {{ item.label }}
          </RouterLink>
          <span
            v-if="route.path === item.href"
            class="absolute left-1/2 -bottom-2 h-1 w-6 -translate-x-1/2 rounded-full bg-green transition-all duration-300"></span>
        </li>
      </ul>
      <div class="flex-1 flex justify-end">
        <a
          href="#contact"
          class="hidden lg:inline-block rounded-full bg-accent px-4 py-1 text-lg text-white">
          Contact
        </a>
        <button class="lg:hidden" @click="toggleMenu">
          <Icon icon="material-symbols:menu-rounded" class="text-3xl" />
        </button>
      </div>
    </nav>
  </header>

  <!-- Mobile Menu -->
  <div
    :class="[
      'fixed right-0 top-0 z-50 h-full w-64 transform rounded-l-2xl bg-gray-100 transition-transform duration-500 ease-in-out',
      isOpenMenu ? 'translate-x-0' : 'translate-x-full',
    ]">
    <ul class="flex flex-col items-center gap-9 pt-40 text-xl font-bold">
      <li v-for="item in navItems" :key="item.href">
        <RouterLink
          :to="item.href"
          @click="closeMenu"
          :class="{
            'text-green font-bold': route.path === item.href,
          }">
          {{ item.label }}
        </RouterLink>
      </li>
      <a
        href="#contact"
        class="rounded-full bg-accent px-4 py-1.5 text-white"
        @click="closeMenu">
        Contact
      </a>
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
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import { navItems } from "@/data/navItems";

const isOpenMenu = ref(false);
const isScrolled = ref(false);

const route = useRoute();

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};

const closeMenu = () => {
  isOpenMenu.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
