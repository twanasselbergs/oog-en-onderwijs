<template>
  <main>
    <Hero />
    <Quote />
    <AboutMe />
    <Services />
    <Testimonials />
    <Contact />
    <Affiliations />
  </main>
</template>

<script setup lang="ts">
import Hero from "@/components/home/Hero.vue";
import Quote from "@/components/home/Quote.vue";
import AboutMe from "@/components/home/AboutMe.vue";
import Testimonials from "@/components/home/Testimonials.vue";
import Contact from "@/components/home/Contact.vue";
import Affiliations from "@/components/home/Affiliations.vue";
import Services from "@/components/home/Services.vue";
</script>
