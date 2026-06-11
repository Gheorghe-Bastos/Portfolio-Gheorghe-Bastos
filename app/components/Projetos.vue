<script setup lang="js">
import { ref } from "vue"

const listaProjetos = ref([])

listaProjetos.value = [
  {
    foto: '/katie-moum-o0kbc907i20-unsplash.jpg',
    titulo: 'O Novo Portal Da Transparência - Hackathon',
    descricao: "Reformulação da interface do Portal da Transparência do Estado do Maranhão para torná-lo palatável ao cidadão comum. Atuando no desenvolvimento do Front-end com Nuxt 3 e Tailwind CSS, implementei uma arquitetura de componentes intuitiva e traduzi termos técnicos orçamentários para uma linguagem simples, separando as necessidades da população das ferramentas avançadas de auditoria. Projeto validado por especialistas da STC e SECTI.",
    link: 'https://github.com/rafgam10/Hackathon-STC',
  },

  {
    foto: '/element5-digital-OyCl7Y4y0Bk-unsplash.jpg',
    titulo: 'Sistema de Gestão Escolar – Creche Estrela do Oriente',
    descricao: "Desenvolvimento de um módulo Back-end para automatizar os processos administrativos e a organização de dados de uma instituição de ensino. Utilizando Java com o framework Hibernate, criei um sistema de filtragem otimizado para amostras complexas no banco de dados. Implementei a exportação de dados com JasperReports para geração ágil de relatórios gerenciais profissionais em PDF, reduzindo drasticamente o tempo gasto em buscas manuais pela administração.",
    link: '',
  },

  {
    foto: '/joachim-schnurle-eqTmD-baDkU-unsplash.jpg',
    titulo: 'HomeFitness – Aplicação Fullstack de Saúde e Bem-estar',
    descricao: "Desenvolvimento de uma aplicação web robusta do zero para cálculo de macronutrientes, taxa metabólica e IMC. Utilizei padrões modulares inspirados no MVC através de Nuxt Composables, garantindo um código escalável e livre de acoplamento rígido. Conta com integração ao Supabase para autenticação segura de utilizadores e persistência ágil de perfis de saúde, entregando uma experiência fluida, altamente responsiva e segura via Vercel.",
    link: '',
  },
]

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full gap-10">
    <div v-for="item in listaProjetos" :key="item.titulo">
      <UCard class="flex flex-col items-center justify-center w-xs">
        <img :src="item.foto" />
        <h3 class="text-2xl font-display font-bold text-center uppercase">{{ item.titulo }}</h3>
        <p class="text-md lg:text-lg text-muted text-center">{{ item.descricao }}</p>
        <a :href="item.link">{{ item.link }}</a>
      </UCard>
    </div>
  </div>
</template>
