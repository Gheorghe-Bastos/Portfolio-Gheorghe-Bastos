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

const links = [
  { link: 'https://github.com/Gheorghe-Bastos', icon: 'i-simple-icons-github' },
  { link: 'https://www.linkedin.com/in/gheorghebastos', icon: 'i-simple-icons-linkedin' }
]
</script>

<template>
  <UApp>
    <header
      class="flex flex-col fixed bg-neutral-50/70 dark:bg-neutral-950/70 backdrop-blur-md items-center w-full justify-center z-50">
      <div class="flex jusitfy-center items-center w-sm lg:w-6xl">
        <div class="flex items-center justify-between gap-3 p-3 w-sm lg:w-full">
          <h1 class="text-lg lg:text-3xl font-display font-bold text-primary">GHEORGHE BASTOS</h1>

          <div class="flex items-center gap-2 lg:gap-6">
            <p class="text-primary text-xs lg:text-md cursor-pointer">Início</p>
            <p class="text-primary text-xs lg:text-md cursor-pointer">Sobre</p>
            <p class="text-primary text-xs lg:text-md cursor-pointer">Projetos</p>
            <p class="text-primary text-xs lg:text-md cursor-pointer">Contato</p>
          </div>

          <div class="flex">
            <UColorModeButton color="primary" icon :ui="{ leadingIcon: 'size-5 lg:size-6' }" />

            <UButton to="https://github.com/nuxt-ui-templates/starter" target="_blank" aria-label="GitHub"
              color="primary" variant="ghost">
              <UIcon name="i-simple-icons-github" class="size-5 lg:size-6" />
            </UButton>
          </div>

        </div>
      </div>
      <USeparator/>
    </header>


    <UMain class="flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
      <NuxtPage />
    </UMain>



    <UFooter class="flex flex-col bg-neutral-50/70 dark:bg-neutral-950/70 backdrop-blur-md">
      <USeparator/>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton v-for="item in links" :key="item.link" :to="item.link" target="_blank" :icon="item.icon"
          :aria-label="item.icon" color="primary" variant="ghost" />
      </template>
    </UFooter>
  </UApp>
</template>
