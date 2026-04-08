<script setup>

import { id } from '@nuxt/ui/runtime/locale/index.js';
import paginasProjetos from './paginasProjetos.vue'

const items = [
  {id: 1, title: 'Projeto 1'}
]
</script>

<template>
  <UCarousel v-slot="{ item }" arrows :items="items" height="400px">
    <paginasProjetos/>
  </UCarousel>
</template>

