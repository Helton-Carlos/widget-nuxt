<script setup lang="ts">
export interface ICard {
    title: string;
    imageMain: string;
    context?: boolean;
    persona?: string;
    imagePersona?: string;
} 

defineProps<ICard>();

defineEmits<{
  (e: "selectCard"): void;
}>();
</script>

<template>
  <div
    class="w-full card"
    @click="$emit('selectCard')"
  >
    <div>
      <img
        :src="imageMain"
        :alt="title"
        class="w-full"
      />
    </div>

    <div class="flex justify-between items-center" v-if="context">
      <div class="flex py-2">
        <img :src="imagePersona" :alt="title" class="w-[80px] rounded-xl" />
        <div class="text-left pl-4">
          <p
            class="text-gray-dark font-extrabold text-md"
          >
            {{ title }}
          </p>
          <p class="text-gray font-semibold text-sm">
            {{ persona }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>