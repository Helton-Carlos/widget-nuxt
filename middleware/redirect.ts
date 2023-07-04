export default defineNuxtRouteMiddleware((to) => {  
  const { $config } = useNuxtApp();

  if ($config) {
    console.log('tem config')
  } else {
    console.log('Heading to', to.path, 'but I think we should go somewhere else...')
    return '/posts/1'
  }
  
})
