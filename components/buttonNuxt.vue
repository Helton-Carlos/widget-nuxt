<script setup lang="ts">
defineEmits<{ (e: "onClick"): void }>();
</script>

<template>
  <div>
    <button class="btn text-sm" @click="$emit('onClick')">
      <slot></slot>
    </button>
  </div>
</template>
