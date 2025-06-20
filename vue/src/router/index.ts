import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Experience from "@/pages/Experience.vue";
import Agenda from "@/pages/Agenda.vue";
import Disclaimer from "@/pages/Disclaimer.vue";
import CookiePolicy from "@/pages/CookiePolicy.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/ervaring", component: Experience },
  { path: "/agenda", component: Agenda },
  { path: "/disclaimer", component: Disclaimer },
  { path: "/cookiebeleid", component: CookiePolicy },
  { path: "/privacy-policy", component: PrivacyPolicy },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
