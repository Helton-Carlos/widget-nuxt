<script setup lang="ts">
const router = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "client", path: "/client" }
];
</script>

<template>
  <header class="bg-white w-[300px] h-screen pt-8 text-center mr-4">
    <ul>
      <h1 class="text-3xl font-bold text-success-ground my-5">Nuxt3</h1>
      <li v-for="(routes, index) in router" :key="index" class="my-1">
        <nuxt-link
          :to="routes.path"
          class="text-xl text-gray-dark font-medium hover:text-white hover:bg-success hover:rounded-lg hover:px-4 hover:py-1"
          >{{ routes.name }}</nuxt-link
        >
      </li>
    </ul>
  </header>
</template>
