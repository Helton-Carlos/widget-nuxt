<script setup lang="ts">
import { cards } from "~/utils/utils-card";
import buttonNuxt from "~/components/buttonNuxt.vue";

const cardValue = cards();

const { id }: any = useRoute().params;

function purchase() {
  alert("hey");
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center">
      <mainText>
        {{ cardValue[id].title }}
      </mainText>

      <div class="flex items-center gap-2">
        <img
          :src="cardValue[id].imagePersona"
          alt="person"
          class="w-[40px] h-[40px] rounded-full"
        />

        <p class="font-medium underline">
          {{ cardValue[id].persona }}
        </p>
      </div>
    </div>

    <div
      class="bg-white flex justify-between items-center gap-4 p-4 my-4 shadow-lg"
    >
      <img
        :src="cardValue[id].imageMain"
        :alt="cardValue[id].title"
        class="w-[350px] h-[200px]"
      />

      <div>
        <div>
          <div class="flex gap-2">
            <Icon name="🛫" />
            <p class="font-bold underline pb-1">Descrição:</p>
          </div>

          <p class="pb-2">{{ cardValue[id].describe }}</p>
        </div>

        <div class="flex">
          <div class="mr-4">
            <div class="flex gap-2">
              <Icon name="💵" />
              <p class="font-bold underline pb-1">Valor:</p>
            </div>

            <p class="pb-2">{{ cardValue[id].money }}</p>
          </div>

          <div class="mr-4">
            <div class="flex gap-2">
              <Icon name="✅" />
              <p class="font-bold underline pb-1">Combos:</p>
            </div>

            <div class="flex flex-wrap">
              <span
                v-for="definitions in cardValue[id].definitions"
                class="bg-warning rounded-full px-5 mx-1 my-1 flex text-white"
                >{{ definitions }}</span
              >
            </div>
          </div>
        </div>
        
        <div class="mt-2">
          <buttonNuxt @onClick="purchase()">
          <Icon name="👜" class="mb-1 mr-2" /> Comprar Viagem
        </buttonNuxt>
        </div>
      </div>
    </div>
  </div>
</template>
