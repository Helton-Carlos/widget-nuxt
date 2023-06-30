<script setup lang="ts">
import { cards } from "~/utils/utils-card.ts";

const cardValue = cards();

const { id } = useRoute().params;
</script>

<template>
  <div>
    <div class="flex items-center">
      <mainText>
        {{ cardValue[id].title }}
      </mainText>
 
      <img :src="cardValue[id].imagePersona" alt="person" class="w-[40px] h-[40px] rounded-full" />
    </div>

    <img :src="cardValue[id].imageMain" :alt="cardValue[id].title" class="m-4" />
  </div>
</template>
