<template>
  <UPageCard title="PRAZER, ME CHAMO GHEORGHE BASTOS." description="Desenvolvedor e aluno do 5º período da escola de
            tecnologia da UNDB. Possuo projetos web utilizando
            Vue.js e Tailwind CSS." orientation="vertical" spotlight spotlight-color="primary">
    <div class="flex justify-around p-0 w-full">
      <div class="flex flex-col items-center">
        <h2 class="text-lg font-bold">Frontend</h2>
        <div class="flex gap-2">
          <UIcon name="logos:tailwindcss-icon" class="size-10" />
          <UIcon name="vscode-icons:file-type-vue" class="size-10" />
          <UIcon name="devicon:nuxt" class="size-10" />
        </div>
      </div>
      <div class="flex flex-col items-center">
        <h2 class="text-lg font-bold">Backend</h2>
        <div class="flex gap-3">
          <UIcon name="vscode-icons:file-type-python" class="size-10" />
          <UIcon name="logos:javascript" class="size-10" />
          <UIcon name="devicon:supabase" class="size-10" />
        </div>
      </div>
      <div class="flex flex-col items-center">
        <h2 class="text-lg font-bold">Ferramentas</h2>
        <div class="flex gap-2">
          <UIcon name="logos:visual-studio-code" class="size-10" />
          <UIcon name="skill-icons:github-dark" class="size-10" />
          <UIcon name="vscode-icons:file-type-vercel" class="size-10" />
        </div>
      </div>
    </div>
  </UPageCard>

</template>

