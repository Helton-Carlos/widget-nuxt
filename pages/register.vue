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

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");

function getSingIn() {
  if (name.value && email.value && password.value && confirmPassword.value) {
    if (password.value === confirmPassword.value) {
      store.logar(email.value, password.value);
      navigateTo("/client");
    } else {
      alert("Senha e confirmação não são iguais.");
    }
  } else {
    alert("Preencha os campos!");
  }
}
</script>

<template>
  <div>
    <mainText> register </mainText>

    <h3 class="text-xl underline">Cadastre-se</h3>

    <div class="card-down text-left">
      <form class="flex flex-col mx-auto gap-2" v-on:submit.prevent="getSingIn">
        <label for="name">Nome</label>
        <input
          type="text"
          name="text"
          id="text"
          v-model="name"
          placeholder="Joe Smith"
        />

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

        <label for="password">Confirmar senha</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="********"
        />

        <buttonNuxt class="my-2">
          <Icon name="✅" class="mb-1 mr-1" /> Cadastrar
        </buttonNuxt>

        <nuxt-link
          to="/client"
          class="text-center hover:underline hover:transition"
        >
          <Icon name="⬅️" class="mb-1 mr-1" /> Voltar
        </nuxt-link>
      </form>
    </div>
  </div>
</template>
