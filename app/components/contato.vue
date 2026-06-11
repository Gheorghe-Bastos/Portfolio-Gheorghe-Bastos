<script lang="ts" setup>



</script>

<template>
  <div class="flex flex-col justify-center items-center w-xs gap-5">
    <h2 class="font-display uppercase font-bold text-3xl lg:text-6xl text-center">Vamos <spam class="text-primary">
        Construir</spam> Algo <spam class="text-primary">Juntos?</spam>
    </h2>
    <p class="text-md lg:text-lg text-muted text-center">
      Se procuras um desenvolvedor focado
      em Engenharia de Software para integrar
      a tua equipa, ou tens uma ideia de
      aplicação que precisa de ganhar vida,
      me envie uma mensagem direta pelo formulário.
      Vamos conversar sobre o teu próximo projeto!
    </p>

    <UPageCard :ui="{ title: 'text-lg text-primary' }" variant="subtle" title="gheorghe.bastos.ofc@gmail.com" />
    <UPageCard :ui="{ title: 'text-lg text-primary' }" variant="subtle" title="Rua Aririzal, Turu, São Luis MA" />

    <UFormField>
      <UPageCard class="bg-secondary">
        <UFormField label="Nome Completo">
          <UInput placeholder="Digite seu nome completo" />
        </UFormField>

        <UFormField label="Email">
          <UInput placeholder="Digite seu email" type="email" />
        </UFormField>

        <UFormField label="Mensagem">
          <UTextarea placeholder="Escreva sua mensagem aqui"/>
        </UFormField>

        <div class="flex justify-end">
          <UButton variant="outline" color="primary">
            Enviar Mensagem
          </UButton>
        </div>
      </UPageCard>
    </UFormField>
  </div>
</template>

<style></style>