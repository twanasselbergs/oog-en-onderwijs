<template>
  <main>
    <section class="py-32 bg-green">
      <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        <div class="text-center">
          <p class="text-white text-sm">Home > Agenda</p>
          <h1 class="text-5xl font-bold text-white pb-1">Agenda & Werkdagen</h1>
          <p class="text-white">De agenda van mijn werk</p>
        </div>
      </div>
    </section>

    <!-- Agenda Timeline -->
    <section class="container mx-auto py-24">
      <h2 class="text-4xl font-bold mb-12">
        <span class="text-green">Overzicht</span>
        van activiteiten
      </h2>
      <div class="flex flex-col gap-12 max-w-3xl">
        <!-- Maart -->
        <div>
          <h3
            class="text-2xl font-bold mb-4 text-green flex items-center gap-2">
            <span>Maart</span>
            <span class="h-1 w-8 bg-green rounded-full"></span>
          </h3>
          <ul class="space-y-2">
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">11 maart</span>
              <span class="text-gray-700">
                Teach the Teacher basis dag 1, UMCU (online)
              </span>
            </li>
          </ul>
        </div>
        <!-- April -->
        <div>
          <h3
            class="text-2xl font-bold mb-4 text-green flex items-center gap-2">
            <span>April</span>
            <span class="h-1 w-8 bg-green rounded-full"></span>
          </h3>
          <ul class="space-y-2">
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">8 april</span>
              <span class="text-gray-700">Coach de Co, VUmc (online)</span>
            </li>
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">13 april</span>
              <span class="text-gray-700">
                Teach the Teacher basis dag 2, UMCU
              </span>
            </li>
          </ul>
        </div>
        <!-- Mei -->
        <div>
          <h3
            class="text-2xl font-bold mb-4 text-green flex items-center gap-2">
            <span>Mei</span>
            <span class="h-1 w-8 bg-green rounded-full"></span>
          </h3>
          <ul class="space-y-2">
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">20 mei</span>
              <span class="text-gray-700">
                Maatwerktraining TTT, cardiologie Antonius Ziekenhuis,
                Nieuwegein
              </span>
            </li>
          </ul>
        </div>
        <!-- September -->
        <div>
          <h3
            class="text-2xl font-bold mb-4 text-green flex items-center gap-2">
            <span>September</span>
            <span class="h-1 w-8 bg-green rounded-full"></span>
          </h3>
          <ul class="space-y-2">
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">28 september</span>
              <span class="text-gray-700">
                Teach the Teacher III, dag 1, UMCU
              </span>
            </li>
          </ul>
        </div>
        <!-- Oktober -->
        <div>
          <h3
            class="text-2xl font-bold mb-4 text-green flex items-center gap-2">
            <span>Oktober</span>
            <span class="h-1 w-8 bg-green rounded-full"></span>
          </h3>
          <ul class="space-y-2">
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">11 oktober</span>
              <span class="text-gray-700">
                Maatwerk training TTT Gynaecologie & Obstetrie, UMCU
              </span>
            </li>
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">26 oktober</span>
              <span class="text-gray-700">
                Maatwerk training TTT Cardiologie, UMCU
              </span>
            </li>
          </ul>
        </div>
        <!-- November -->
        <div>
          <h3
            class="text-2xl font-bold mb-4 text-green flex items-center gap-2">
            <span>November</span>
            <span class="h-1 w-8 bg-green rounded-full"></span>
          </h3>
          <ul class="space-y-2">
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">4 november</span>
              <span class="text-gray-700">
                Maatwerk training TTT Cardiologie, UMCU
              </span>
            </li>
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">25 november</span>
              <span class="text-gray-700">
                Teach the Teacher basis dag 1, VUmc
              </span>
            </li>
          </ul>
        </div>
        <!-- December -->
        <div>
          <h3
            class="text-2xl font-bold mb-4 text-green flex items-center gap-2">
            <span>December</span>
            <span class="h-1 w-8 bg-green rounded-full"></span>
          </h3>
          <ul class="space-y-2">
            <li
              class="bg-gray-50 rounded-2xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-bold text-accent">16 december</span>
              <span class="text-gray-700">
                Teach the Teacher basis dag 2, VUmc
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts"></script>
