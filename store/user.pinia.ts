import { defineStore } from "pinia"

export const userLogin = defineStore('userLogin', {
  state: () => ({
    login: false,
    user: {
      email: "",
      password: ""
    }
  }),
  actions: {
    logar(email: string, password: string): void {
      this.login = true;
      this.user = {
        email,
        password
      }
    },
  },
  getters: {
    showText(): string {
      return 'o valor é: ' + this.login
    }
  }
})