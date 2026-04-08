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

const title = 'Nuxt Starter Template'
const description = 'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.'

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
    <UHeader>
      
      <template #left>
        <div class="flex items-center gap-6">
          <p class="text-primary cursor-pointer hover:shadow-2xl hover:shadow-amber-400">Início</p>
          <p class="text-primary cursor-pointer hover:shadow-2xl hover:shadow-amber-400">Sobre</p>
          <p class="text-primary cursor-pointer hover:shadow-2xl hover:shadow-amber-400">Projetos</p>
          <p class="text-primary cursor-pointer hover:shadow-2xl hover:shadow-amber-400">Contato</p>
        </div>
      </template>

      <template #right>
        <UColorModeButton 
        color="primary"
        />

        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="primary"
          variant="ghost"
        />
      </template>
    </UHeader>

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
        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="primary"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
