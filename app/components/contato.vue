<script lang="ts" setup>
import { useContato } from '~/composables/useContato';

const { enviarEmail } = useContato()

const nomeInput = ref('');
const emailInput = ref('');
const assuntoInput = ref('');
const mensagemInput = ref('');

function enviarFormulario() {
  const resultado: any = enviarEmail({
    nome: nomeInput.value,
    email: emailInput.value,
    assunto: assuntoInput.value,
    mensagem: mensagemInput.value,
  });

  if (!resultado.sucesso) {
    const mensagens = resultado.erros.map((e: any) => e.mensagem).join('\n');
    alert(mensagens);
    return;
  }

  console.log(resultado.usuario);

  nomeInput.value = '';
  emailInput.value = '';
  assuntoInput.value = '';
  mensagemInput.value = '';
}

</script>

<template>
  <div class="flex flex-col justify-center items-center w-xs gap-5">
    <h2 class="font-display uppercase font-bold text-3xl lg:text-6xl text-center">Vamos <spam class="text-primary">
        Construir</spam> Algo <spam class="text-primary">Juntos?</spam>
    </h2>
    <p class="text-md lg:text-lg text-muted text-center">
      Se procuras um desenvolvedor focado
      em Engenharia de Software para integrar
      na sua equipe, ou tens uma ideia de
      aplicação que precisa de ganhar vida,
      me envie uma mensagem direta pelo formulário.
      Vamos conversar sobre o teu próximo projeto!
    </p>

    <UPageCard class="w-xs" :ui="{ title: 'text-lg text-primary' }" variant="outline" title="gheorghe.bastos.ofc@gmail.com" />
    <UPageCard class="w-xs" :ui="{ title: 'text-lg text-primary' }" variant="outline" title="Rua Aririzal, Turu, São Luis MA" />

    <UForm @submit.prevent="enviarFormulario">
      <UPageCard class="bg-secondary">
        <UFormField label="Nome Completo">
          <UInput v-model="nomeInput" placeholder="Digite seu nome completo" />
        </UFormField>

        <UFormField label="Email">
          <UInput v-model="emailInput" placeholder="Digite seu email" type="email" />
        </UFormField>

        <UFormField label="Assunto">
          <UInput v-model="assuntoInput" placeholder="Digite o assunto da mensagem" />
        </UFormField>

        <UFormField label="Mensagem">
          <UTextarea v-model="mensagemInput" placeholder="Escreva sua mensagem aqui"/>
        </UFormField>

        <div class="flex">
          <UButton type="submit" class="w-full flex justify-center" variant="subtle" color="primary">
            Enviar Mensagem
          </UButton>
        </div>
      </UPageCard>
    </UForm>
  </div>
</template>