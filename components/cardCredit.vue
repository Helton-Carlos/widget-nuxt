<script setup lang="ts">
import { ref } from "vue";

const name = ref<string>("JOHN SMITH");
const number = ref<string>("4642 3489 9867 7632");
const valid = ref<string>("11/25");
const expiry = ref<string>("02/28");
const cvv = ref<number>(123);

const modalBuyTrip = ref<boolean>(false);

function buyTrip() {
  if (name.value && number.value && valid.value && expiry.value && cvv.value) {
    modalBuyTrip.value = true;
  } else {
    modalBuyTrip.value = false;
  }
}
</script>

<template>
  <div class="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity">
    <div class="fixed inset-0 z-10">
      <div
        class="flex h-full justify-center p-4 text-center items-center sm:p-0"
      >
        <div class="w-full card-down container" v-if="!modalBuyTrip">
          <div
            class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
          >
            <img
              class="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/kGkSg1v.png"
            />

            <div class="w-full px-8 absolute top-8">
              <div class="flex justify-between">
                <div class="text-left">
                  <p class="font-light">Name</p>
                  <p class="font-medium tracking-widest" data-test="name">
                    {{ name }}
                  </p>
                </div>
                <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
              </div>
              <div class="pt-1">
                <p class="font-light text-left">Card Number</p>
                <p
                  class="font-medium tracking-more-wider text-left"
                  data-test="number"
                >
                  {{ number }}
                </p>
              </div>
              <div class="pt-6 pr-6">
                <div class="flex justify-between">
                  <div class="">
                    <p class="font-light text-xs text-left">Valid</p>
                    <p
                      class="font-medium tracking-wider text-sm"
                      data-test="valid"
                    >
                      {{ valid }}
                    </p>
                  </div>
                  <div class="">
                    <p class="font-light text-xs text-left">Expiry</p>
                    <p
                      class="font-medium tracking-wider text-sm"
                      data-test="expiry"
                    >
                      {{ expiry }}
                    </p>
                  </div>

                  <div class="">
                    <p class="font-light text-xs text-left">CVV</p>
                    <p
                      class="font-bold tracking-more-wider text-sm"
                      data-test="cvv"
                    >
                      {{ cvv }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form class="container text-left" @submit.prevent="buyTrip">
            <h2 class="font-bold underline pb-1">Edite seu cartão:</h2>

            <label for="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              placeholder="JOHN SMITH"
            />

            <div class="flex gap-2">
              <div>
                <label for="number">Numero do Cartão</label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  v-model="number"
                  placeholder="4642 3489 9867 7632"
                />
              </div>

              <div>
                <label for="validade">valid</label>
                <input
                  type="text"
                  name="validade"
                  id="validade"
                  v-model="valid"
                  placeholder="03/21"
                />
              </div>
            </div>

            <div class="flex gap-2">
              <div>
                <label for="expira">Expira</label>
                <input
                  type="text"
                  name="expira"
                  id="expira"
                  v-model="expiry"
                  placeholder="03/25"
                />
              </div>
              <div>
                <label for="cvv">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  v-model="cvv"
                  placeholder="035"
                />
              </div>
            </div>

            <ButtonNuxt class="my-4"> Comprar viagem </ButtonNuxt>
          </form>
        </div>

        <modal v-if="modalBuyTrip">
          <template v-slot:header>
            <nuxt-link to="/" class="flex justify-end mb-4">
              <Icon class="cursor-pointer" name="❌" />
            </nuxt-link>
          </template>

          <template v-slot:body>
            <div class="flex justify-center items-center">
              <div class="flex gap-2 items-center">
                <Icon name="✈️" />
                <p class="font-semibold">
                  Sua compra foi realizada com sucesso!
                </p>
              </div>
            </div>
            <p class="font-thin mb-6">
              Você receberá a confirmação em seu e-mail.
            </p>
          </template>

          <template v-slot:footer>
            <div class="flex justify-center items-center gap-4">
              <nuxt-link to="/">
                <buttonNuxt> Ok </buttonNuxt>
              </nuxt-link>
            </div>
          </template>
        </modal>
      </div>
    </div>
  </div>
</template>
