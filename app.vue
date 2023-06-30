<script setup lang="ts">
import SideBar from './layout/sidebar.vue';
</script>

<template>
  <div class="flex">
    <SideBar />
    <div class="mt-4">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>