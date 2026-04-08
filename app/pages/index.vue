<template>
  <div class="flex flex-col gap-60 w-[60%] justify-center items-center">
    <div class="flex items-center justify-center w-2xl">
      <UPageHero title="NÃO HÁ LIMITE PARA A CRIAÇÃO"
        description="Desenvolvo aplicações onde cada clique gera valor e cada linha de código é um compromisso com a clareza e a utilidade. Transformo a complexidade dos dados em simplicidade para as pessoas."
        :ui="{ title: 'text-5xl sm:text-7xl' }" :links="[{
          label: 'Quero conhecer!',
          to: '',
          target: '_blank',
          trailingIcon: 'i-lucide-arrow-right'
        }]" />
    </div>
    <div class="flex items-center w-full">
      <sobre />
    </div>
    <div class="flex items-center w-full">
      <Projetos />
    </div>
  </div>
</template>
