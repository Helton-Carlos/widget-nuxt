import { defineStore } from "pinia"

export const userLogin = defineStore('userLogin', {
  state: () => ({
    login: true,
    user: {
      email: "",
      password: "",
      name: "",
    }
  }),
  actions: {
    logar(email: string, password: string, name: string): void {
      this.login = true;
      this.user = {
        email,
        password,
        name
      }
    },
  },
  getters: {
    showText(): string {
      return 'o valor é: ' + this.login
    }
  }
})