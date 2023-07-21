<script setup lang="ts">
import Card from "~/components/card.vue";
import { cards } from "~/utils/utilsCard";

const cardValue = cards();

const textMain = ref<string>("Pacotes em promoção");

function selectCard(id: number) {
  navigateTo(`/posts/${id}`);
}

definePageMeta({
  middleware: () => {
    return true;
  },
});
</script>

<template>
  <div>
    <main>
      <img
        class="w-full"
        src="../assets/n3/main-image.png"
        alt="main-image"
      />
    </main>

    <mainText> {{ textMain }} </mainText>

    <div class="flex justify-between flex-wrap gap-4">
      <Card
        v-for="card in cardValue"
        :key="card.id"
        context
        :title="card.title"
        :imageMain="card.imageMain"
        :persona="card.persona"
        :imagePersona="card.imagePersona"
        :money="card.money"
        @selectCard="selectCard(card.id)"
      />
    </div>
  </div>
</template>
utils/utilsCard