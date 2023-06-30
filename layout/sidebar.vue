<script setup lang="ts">
const router = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "client", path: "/client" }
];
</script>

<template>
  <header class="sidebar">
    <ul>
      <h1 class="text-3xl font-bold text-success-ground">Nuxt3</h1>
      
      <li v-for="(routes, index) in router" :key="index" class="my-8">
        <nuxt-link
          :to="routes.path"
          class="routes-path "
          >{{ routes.name }}</nuxt-link
        >
      </li>
    </ul>
  </header>
</template>
