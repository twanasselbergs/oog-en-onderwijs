<template>
  <div class="bg-gray-50 pb-12">
    <footer class="bg-accent rounded-4xl mx-8 text-white pt-30">
      <div
        class="container mx-auto flex flex-row items-start justify-center gap-x-56">
        <div class="flex flex-col items-start gap-4">
          <div class="flex items-center gap-4">
            <img
              src="/img/logos/logo.png"
              alt="Oog & Onderwijs logo"
              class="w-8 h-auto" />
            <p class="text-lg font-bold">Oog & Onderwijs</p>
          </div>
          <p class="text-gray-300 max-w-xs">
            Onderwijs op maat, met oog voor de mens. Workshops, trainingen en
            begeleiding door een ervaren medisch docent.
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg mb-2">Navigatie</h3>
          <RouterLink
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            class="hover:text-green transition-colors duration-300 w-fit">
            {{ item.label }}
          </RouterLink>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="font-bold text-lg mb-2">Contact</h3>
          <div class="flex items-center gap-3">
            <a
              href="mailto:oog-en-onderwijs@live.nl"
              class="hover:text-green duration-300 transition-colors flex gap-3">
              <Icon
                icon="material-symbols:mail-rounded"
                class="text-2xl text-green" />
              <span>oog-en-onderwijs@live.nl</span>
            </a>
          </div>
          <div class="flex items-center gap-3">
            <a
              href="tel:0655013388"
              class="hover:text-green duration-300 transition-colors flex gap-3">
              <Icon icon="material-symbols:call" class="text-2xl text-green" />
              <span>06 55013388</span>
            </a>
          </div>
          <div class="flex items-center gap-3">
            <Icon
              icon="material-symbols:location-on-rounded"
              class="text-2xl text-green" />
            <span>Regio Utrecht</span>
          </div>
        </div>
      </div>
      <div
        class="container mx-auto mt-30 pb-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-2">
        <div class="flex gap-2">
          <div>
            &copy; {{ new Date().getFullYear() }} Oog & Onderwijs. Alle rechten
            voorbehouden.
          </div>
          <div class="flex gap-4">
            <RouterLink
              to="/privacy-policy"
              class="hover:text-green transition-colors">
              Privacy Policy
            </RouterLink>
            <RouterLink
              to="/cookiebeleid"
              class="hover:text-green transition-colors">
              Cookiebeleid
            </RouterLink>
            <RouterLink
              to="/disclaimer"
              class="hover:text-green transition-colors">
              Disclaimer
            </RouterLink>
          </div>
        </div>
        <div class="flex gap-6">
          <a href="#">
            <Icon
              icon="mdi:linkedin"
              class="text-3xl text-gray-100 hover:text-green duration-300 transition-colors" />
          </a>
          <a href="#">
            <Icon
              icon="mdi:instagram"
              class="text-3xl text-gray-100 hover:text-green duration-300 transition-colors" />
          </a>
          <a href="#">
            <Icon
              icon="mdi:youtube"
              class="text-3xl text-gray-100 hover:text-green duration-300 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
import { navItems } from "@/data/navItems";
</script>
