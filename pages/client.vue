<script setup lang="ts">
import { ref } from "vue";
import { usersMock } from "~/mock/user";
import { userLogin } from "~/store/user.pinia";

const [ users ] = usersMock()
const { user }= userLogin().$state

const email = ref<string>("");
const password = ref<string>("");

function getSingIn() {
  if ((users.email === email.value) && (users.password === password.value)) {
    
    user.email = users.email ,
    user.password = users.password,
    user.name =  users.name,

    navigateTo('/user');
  } else {
    alert("* Preencha os campos corretamente.");
  }
}
</script>

<template>
  <div>
    <mainText> Client </mainText>
 
    <h3 class="text-xl underline">Log In</h3>

    <div class="card-down">
      <form class="flex flex-col mx-auto gap-2" v-on:submit.prevent="getSingIn">

        <label for="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="nuxtvue@gmail.com"
        />
        <p class="text-sm">copiar: {{ users.email }}</p>

        <label for="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="********"
        />
        <p class="text-sm">copiar: {{ users.password }}</p>

        <buttonNuxt class="my-2"> 
          <Icon name="✅" class="mb-1 mr-1" /> LogIn 
        </buttonNuxt>

        <nuxt-link to="/register" class="text-center hover:underline hover:transition">
          <Icon name="😢" class="mb-1 mr-1" /> Não sou cadastrado
        </nuxt-link>
      </form>
    </div>
  </div>
</template>
