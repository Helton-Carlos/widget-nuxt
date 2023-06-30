<script setup lang="ts">
import Card from "~/components/card.vue";
import { cards } from "~/utils/utils-card.ts";

const cardValue = cards();

function selectCard(id: number) {
  navigateTo(`/posts/${id}`);
}

definePageMeta({
  middleware: () => {
    return true
  }
})
</script>

<template>
  <div>
    <mainText>
      Nuxt-3
    </mainText>
    
    <div class="flex flex-wrap">
      <Card
        v-for="card in cardValue"
        :key="card.id"
        context
        :title="card.title"
        :imageMain="card.imageMain"
        :persona="card.persona"
        :imagePersona="card.imagePersona"
        @selectCard="selectCard(card.id)"
      />
    </div>
  </div>
</template>