<script setup lang="ts">
export interface ICard {
  title: string;
  imageMain: string;
  money: number;
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
  <div class="w-full card" @click="$emit('selectCard')">
    <div>
      <img :src="imageMain" :alt="title" class="w-full h-[190px]" />
    </div>

    <div class="flex justify-between items-center" v-if="context">
      <div class="flex py-2 px-4">
        <img
          class="h-[40px] w-[40px] rounded-full"
          :src="imagePersona"
          :alt="title"
        />
        <div class="text-left pl-4">
          <div class="flex gap-2">
            <Icon name="🛫" />
            <p class="text-gray-dark font-extrabold text-md">
              {{ title }}
            </p>
          </div>

          <div class="flex gap-2">
            <div class="flex gap-2">
              <Icon name="🧑" />
              <p class="text-gray font-semibold text-sm">
                {{ persona }}
              </p>
            </div>

            <div class="flex gap-2">
              <Icon name="💵" />
              <p class="text-gray font-semibold text-sm underline">
                {{ money }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
