<script setup lang="ts">
const router = [
  { name: "home", path: "/", icon: "uil:dashboard" },
  { name: "about", path: "/about", icon: "uil:building" },
  { name: "client", path: "/client", icon: "uil:user-circle" },
];
</script>

<template>
  <header class="sidebar">
    <h1>Nuxt3</h1>

    <ul>
      <li v-for="(routes, index) in router" :key="index" class="my-8">
        <nuxt-link
          :to="routes.path"
          class="routes-path"
        >
          <Icon :name="routes.icon" />{{ routes.name }}</nuxt-link
        >
      </li>
    </ul>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply bg-primary text-white rounded-lg;
}
</style>