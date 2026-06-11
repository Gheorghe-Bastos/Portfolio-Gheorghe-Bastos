<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'pt-br'
  }
})

const title = 'Gheorghe Bastos'
const description = 'Desenvolvedor full-stack com foco em criar aplicações web modernas e eficientes.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <header class="flex fixed bg-neutral-900 items-center justify-center">
      <div class="flex items-center justify-between gap-3 p-3 w-full lg:w-4xl">
        <h1 class="text-lg lg:text-3xl font-display font-bold text-primary">GHEORGHE BASTOS</h1>

        <div class="flex items-center gap-2 lg:gap-6">
          <p class="text-primary text-xs lg:text-md cursor-pointer">Início</p>
          <p class="text-primary text-xs lg:text-md cursor-pointer">Sobre</p>
          <p class="text-primary text-xs lg:text-md cursor-pointer">Projetos</p>
          <p class="text-primary text-xs lg:text-md cursor-pointer">Contato</p>
        </div>

        <div class="flex">
          <UColorModeButton size="sm" color="primary" />

          <UButton to="https://github.com/nuxt-ui-templates/starter" target="_blank" icon="i-simple-icons-github"
            aria-label="GitHub" color="primary" size="sm" variant="ghost" />
        </div>
        
      </div>
      <USeparator/>
    </header>
  

    <UMain class="flex items-center justify-center">
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton to="https://github.com/nuxt-ui-templates/starter" target="_blank" icon="i-simple-icons-github"
          aria-label="GitHub" color="primary" variant="ghost" />
      </template>
    </UFooter>
  </UApp>
</template>
