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
      class="card-down md:flex md:justify-between"
    >
      <img
        :src="cardValue[id].imageMain"
        :alt="cardValue[id].title"
        class="w-full h-[200px] md:w-[450px]"
      />

      <div>
        <div>
          <div class="md:flex gap-2">
            <Icon name="🛫" />
            <p class="font-bold underline pb-1">Descrição:</p>
          </div>

          <p class="pb-2">{{ cardValue[id].describe }}</p>
        </div>

        <div class="md:flex gap-4">
          <div class="mr-4">
            <div class="flex gap-2">
              <Icon name="💵" />
              <p class="font-bold underline pb-1">Valor:</p>
            </div>

            <p class="pb-2">{{ cardValue[id].money }}</p>
          </div>

          <div class="md:flex gap-4">
            <div class="mr-4">
              <div class="flex gap-2">
                <Icon name="🌁" />
                <p class="font-bold underline pb-1">Cidade:</p>
              </div>

              <p class="pb-2">{{ cardValue[id].title }}</p>
            </div>
          </div>

          <div class="mr-4">
            <div class="flex gap-2">
              <Icon name="🗾" />
              <p class="font-bold underline pb-1">País:</p>
            </div>

            <p class="pb-2">{{ cardValue[id].country }}</p>
          </div>
        </div>

        <div class="gap-4">
          <div class="mr-4">
            <div class="flex gap-2">
              <Icon name="✅" />
              <p class="font-bold underline pb-1">Combos:</p>
            </div>

            <div class="flex flex-wrap">
              <span
                v-for="definitions in cardValue[id].definitions"
                class="bg-warning rounded-full px-5 mx-1 mb-2 flex text-white md:mb-4"
                >{{ definitions }}</span
              >
            </div>
          </div>
        </div>

        <hr class="pb-2" />

        <div class="mt-2 flex items-center gap-2">
          <buttonNuxt @onClick="purchase()">
            <Icon name="👜" class="mb-1 mr-2" /> Comprar Viagem
          </buttonNuxt>

          <nuxt-link to="/">
            <Icon name="⬅️ " class="mb-1" /> Voltar
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
