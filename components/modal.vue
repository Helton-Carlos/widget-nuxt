<script setup lang="ts">
defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <div class="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity">
    <div class="fixed inset-0 z-10">
      <div
        class="flex h-full justify-center p-4 text-center items-center sm:p-0"
      >
        <div class="w-[400px] card-down">
          <slot name="header"></slot>
          <slot name="body"></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
