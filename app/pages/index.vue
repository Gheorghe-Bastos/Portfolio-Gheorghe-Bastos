<template>
  <div class="flex flex-col gap-60 justify-center items-center">
    <div class="flex items-center justify-center w-sm md:w-lg lg:w-2xl">
      <UPageHero>
        <div class="flex flex-col w-xs lg:w-full gap-8">
          <h1 class="font-display font-bold text-3xl lg:text-6xl text-center">TRANSFORMANDO <span class="text-primary">IDEIAS</span>
            EM <span class="text-primary">SOLUÇÕES REAIS</span></h1>
          <p class="text-md lg:text-lg text-muted text-center">
            Sinta-se à vontade para conhecer
            o meu trabalho compartilhe o seu objetivo 
            comigo para o tornarmos realidade.
          </p>
          <div class="flex flex-col justify-between items-center lg:justify-center gap-5 lg:gap-8">
            <UButton class="rounded-xs" size="xl" trailing-icon="material-symbols:arrow-right-alt">
              Ver Meus Projetos
            </UButton>
            <UButton class="rounded-xs" size="xl" trailing-icon="material-symbols:contact-mail-outline" variant="outline">
              Entrar em Contato
            </UButton>
          </div>
        </div>
      </UPageHero>
    </div>
    <div class="flex items-center justify-center w-full">
      <sobre/>
    </div>
    <div class="flex items-center w-full">
      <projetos/>
    </div>
    <div class="flex items-center justify-center w-full">
      <contato/>
    </div>
  </div>
</template>
