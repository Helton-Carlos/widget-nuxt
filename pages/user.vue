<script setup lang="ts">
import { userLogin } from "~/store/user.pinia";

const store = userLogin();
const { email, name }  = store.user

definePageMeta({
  middleware: 'redirect'
}) 
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
