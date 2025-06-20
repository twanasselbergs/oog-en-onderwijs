<template>
  <section class="py-12" id="contact">
    <div class="container mx-auto">
      <h2 class="mb-12 text-4xl font-bold">Heeft u een <span class="text-green">vraag</span> of <span class="text-green"></span> leerwens?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="rounded-3xl bg-gray-50 p-16 gap-8">
               <p class="text-gray-500 min-w-96 pb-12">
              Wilt u meer informatie over de cursussen of heeft u vragen? Neem
              dan gerust contact met mij op! U kunt mij bereiken via het
              onderstaande e-mailadres. Ook kunt u gebruik maken van het
              contactformulier aan de rechterzijde.
            </p>
            <div class="flex items-center">
          <div class="flex-col">
            <div class="py-4 px-4 flex flex-start gap-4">
              <Icon
                icon="material-symbols:location-on-rounded"
                class="text-2xl text-green mt-1" />
              <div>
                <p class="font-bold">Address</p>
                <p class="text-gray-500">Regio Utrecht</p>
              </div>
            </div>
            <a
              href="mailto:oog-en-onderwijs@live.nl"
              class="hover:bg-gray-100 rounded-3xl py-4 px-4 flex flex-start gap-4 duration-300">
              <Icon
                icon="material-symbols:mail-rounded"
                class="text-2xl text-green mt-1" />
              <div>
                <p class="font-bold">E-mailadres</p>
                <p class="text-gray-500">oog-en-onderwijs@live.nl</p>
              </div>
            </a>
            <a
              href="tel:0655013388"
              class="hover:bg-gray-100 rounded-3xl duration-300 py-4 px-4 flex flex-start gap-4">
              <Icon
                icon="material-symbols:call"
                class="text-2xl text-green mt-1" />
              <div>
                <p class="font-bold">Telefoonnummer</p>
                <p class="text-gray-500">06 55013388</p>
              </div>
            </a>
            <div class="flex gap-4 pt-4">
              <a
                href="#"
                class="rounded-full border border-gray-200 p-2 hover:bg-green/10 transition">
                <Icon icon="mdi:linkedin" class="text-xl text-gray-500" />
              </a>
              <a
                href="#"
                class="rounded-full border border-gray-200 p-2 hover:bg-green/10 transition">
                <Icon icon="mdi:facebook" class="text-xl text-gray-500" />
              </a>
              <a
                href="#"
                class="rounded-full border border-gray-200 p-2 hover:bg-green/10 transition">
                <Icon icon="mdi:youtube" class="text-xl text-gray-500" />
              </a>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78456.21568506141!2d5.000091946937739!3d52.084158025583584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f4339d32d37%3A0xd6c8fc4c19af4ae9!2sUtrecht!5e0!3m2!1sen!2snl!4v1750252768533!5m2!1sen!2snl"
            style="border: 0"
            loading="lazy"
            zoomControl: 
            class="rounded-4xl w-64 h-80 object-cover ml-24"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <form class="space-y-6">
          <h2 class="text-2xl font-bold">Contactformulier</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="field in fields" :key="field.name" class="relative">
              <input
                :id="field.name"
                v-model="form[field.name]"
                :type="field.type"
                @focus="active = field.name"
                @blur="active = ''"
                class="peer w-full rounded-2xl border border-gray-200 px-4 py-3 pt-6 bg-transparent focus:border-green focus:outline-none transition"
                placeholder=" " />
              <span
                class="pointer-events-none absolute left-2.5 top-5 z-10 origin-left select-none bg-transparent px-1 text-gray-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-80 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400"
                :class="
                  form[field.name] || active === field.name
                    ? '-translate-y-4 scale-80'
                    : ''
                ">
                {{ field.label }}
              </span>
            </div>
          </div>
          <div class="relative">
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              @focus="active = 'message'"
              @blur="active = ''"
              class="peer w-full rounded-2xl border border-gray-200 px-4 py-12 pt-6 text-lg bg-transparent focus:border-green focus:outline-none transition resize-none"
              placeholder=" "></textarea>
            <span
              class="pointer-events-none absolute left-2.5 top-5 z-10 origin-left select-none bg-transparent px-1 text-gray-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-80 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400"
              :class="
                form.message || active === 'message'
                  ? '-translate-y-4 scale-80'
                  : ''
              ">
              Bericht
            </span>
          </div>
          <button
            type="submit"
            class="mt-2 w-full md:w-auto rounded-full bg-green px-8 py-3 text-lg font-bold text-white shadow hover:bg-green/90 transition">
            Verstuur je bericht
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});
const active = ref("");

const fields = [
  { name: "firstName", label: "Voornaam", type: "text" },
  { name: "lastName", label: "Achternaam", type: "text" },
  { name: "email", label: "E-mailadres", type: "email" },
  { name: "phone", label: "Telefoonnummer", type: "tel" },
];
</script>
