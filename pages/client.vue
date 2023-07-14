<script setup lang="ts">
import { ref } from "vue";
import { userLogin } from "~/store/user.pinia";
// definePageMeta({
//   middleware: 'redirect'
// })
const store = userLogin();

definePageMeta({
  middleware: () => {
    return true;
  },
});

const email = ref<string>("");
const password = ref<string>("");

function getSingIn() {
  if (email.value && password.value) {
    store.logar(email.value, password.value);
    navigateTo('/');
  } else {
    alert("Preencha os campos!");
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

        <label for="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="********"
        />

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
