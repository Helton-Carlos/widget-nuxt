<script setup lang="ts">
defineEmits<{ (e: "onClick"): void }>();
</script>

<template>
  <div>
    <button class="btn" @click="$emit('onClick')">
      <slot></slot>
    </button>
  </div>
</template>
