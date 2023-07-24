<script setup lang="ts">
import { breakpoints } from "@/utils/useBreakpoints";

const { lg } = breakpoints();

const menu = ref<boolean>(false);

const router = [
  { name: "home", path: "/", icon: "uil:dashboard" },
  { name: "about", path: "/about", icon: "uil:building" },
  { name: "client", path: "/client", icon: "uil:user-circle" },
];
</script>

<template>
  <header :class="menu ? 'header-desktop' : 'header-mobile'">
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

      <img v-else src="../assets/n3/menu.png" alt="menu" @click="menu = !menu" />
    </div>

    <ul class="mt-8 text-center z-50" v-if="!lg && !menu">
      <li v-for="(routes, index) in router" :key="index" class="my-4">
        <nuxt-link :to="routes.path" class="routes-path px-4" @click="menu = !menu" >
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
