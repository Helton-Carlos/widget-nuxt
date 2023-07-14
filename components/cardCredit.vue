<script setup lang="ts"></script>

<template>
  <div class="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity">
    <div class="fixed inset-0 z-10">
      <div
        class="flex h-full justify-center p-4 text-center items-center sm:p-0"
      >
        <div class="card container bg-opacity-100">
          <div
            class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
          >
            <img
              class="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/kGkSg1v.png"
            />

            <div class="w-full px-8 absolute top-8">
              <div class="flex justify-between">
                <div class="">
                  <p class="font-light">Name</p>
                  <p class="font-medium tracking-widest">{{ name }}</p>
                </div>
                <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
              </div>
              <div class="pt-1">
                <p class="font-light">Card Number</p>
                <p class="font-medium tracking-more-wider">
                  {{ number }}
                </p>
              </div>
              <div class="pt-6 pr-6">
                <div class="flex justify-between">
                  <div class="">
                    <p class="font-light text-xs">Valid</p>
                    <p class="font-medium tracking-wider text-sm">11/15</p>
                  </div>
                  <div class="">
                    <p class="font-light text-xs text-xs">Expiry</p>
                    <p class="font-medium tracking-wider text-sm">03/25</p>
                  </div>

                  <div class="">
                    <p class="font-light text-xs">CVV</p>
                    <p class="font-bold tracking-more-wider text-sm">···</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="container text-left">
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
                <label for="validade">Validade</label>
                <input
                  type="text"
                  name="validade"
                  id="validade"
                  v-model="validade"
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
                  v-model="expira"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
