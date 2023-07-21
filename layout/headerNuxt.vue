<script setup lang="ts">
import { breakpoints } from "@/utils/useBreakpoints";

const { lg } = breakpoints();

const router = [
  { name: "home", path: "/", icon: "uil:dashboard" },
  { name: "about", path: "/about", icon: "uil:building" },
  { name: "client", path: "/client", icon: "uil:user-circle" },
];
</script>

<template>
  <header class="header-desktop">
    <div class="container flex justify-between items-center ">
      <nuxt-link to="/">
        <h1><img src="../assets/n3/n3-logo.png" />Nuxt3</h1>
      </nuxt-link>

      <ul class="flex" v-if="lg">
        <li v-for="(routes, index) in router" :key="index">
          <nuxt-link :to="routes.path" class="routes-path">
            <Icon :name="routes.icon" />{{ routes.name }}</nuxt-link
          >
        </li>
      </ul>

      <div v-else>
        <span class="block w-8 h-0.5 bg-primary animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-primary animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-primary animate-pulse"></span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply bg-primary text-white rounded-lg;
}
</style>
