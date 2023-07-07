<script setup lang="ts">
const router = [
  { name: "home", path: "/", icon: "uil:dashboard" },
  { name: "about", path: "/about", icon: "uil:building" },
  { name: "client", path: "/client", icon: "uil:user-circle" },
];
</script>

<template>
  <header>
    <div class="container flex justify-between items-center">
      <nuxt-link to="/">
        <h1><img src="../assets/n3/n3-logo.png" />Nuxt3</h1>
      </nuxt-link>

      <ul class="flex">
        <li v-for="(routes, index) in router" :key="index">
          <nuxt-link :to="routes.path" class="routes-path">
            <Icon :name="routes.icon" />{{ routes.name }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply bg-primary text-white rounded-lg;
}
</style>
