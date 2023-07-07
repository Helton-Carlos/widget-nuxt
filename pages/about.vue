<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  middleware: () => {
    return true;
  },
});

const email = ref<string>("");
const text = ref<string>("");

function newsLetter() {
  email.value && text.value ? alert("Enviado!") : alert("Preencha os campos!");
}
</script>

<template>
  <div>
    <mainText> About </mainText>

    <h3 class="text-xl underline">A Empresa</h3>

    <p>
      O comprometimento social, a solidez e a inovação propiciaram notoriedade e
      visibilidade junto ao público.
    </p>

    <div class="card-down">
      <form
        class="flex mx-auto justify-between gap-8 items-center"
        v-on:submit="newsLetter"
      >
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="nuxtvue@gmail.com"
        />
        <input
          type="text"
          name="text"
          id="text"
          v-model="text"
          placeholder="Joe Smith"
        />

        <buttonNuxt>
          <Icon name="💌" class="mb-1 mr-1" /> Quero novidades
        </buttonNuxt>
      </form>
    </div>
  </div>
</template>
