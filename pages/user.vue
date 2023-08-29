<script setup lang="ts">
import { ref } from "vue";
import { userLogin } from "~/store/user.pinia";

const store = userLogin();

definePageMeta({
  middleware: () => {
    return true;
  },
});

const { email, name }  = store.user
</script>

<template>
  <div>
    <mainText> User </mainText>
 
    <h3 class="text-xl underline">Welcome</h3>

    <div class="card-down">
        <p class="font-bold">Name:</p>
        <p>{{ name }}</p>

        <p class="font-bold">E-mail:</p>
        <p>{{ email }}</p>

        <nuxt-link to="/" class="btn my-4 flex text-center justify-center items-center ">
          <Icon name="✅" class="mb-1 mr-1" /> Buy
        </nuxt-link>
    </div>
  </div>
</template>
