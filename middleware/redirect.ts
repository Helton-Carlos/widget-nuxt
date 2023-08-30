import { userLogin } from "~/store/user.pinia";

export default defineNuxtRouteMiddleware((to) => {  
  const { $config } = useNuxtApp();
  const store = userLogin();

  if ($config) {
    if(!store.login) {
      console.log('Você não está autorizado:', to.path, ',faça seu cadastro.')
      return '/'
    } else {
      return console.log('autorizado...')
    }
   
  } else {
    console.log('Heading to', to.path, 'but I think we should go somewhere else...')
    return '/posts/1'
  }
  
})
