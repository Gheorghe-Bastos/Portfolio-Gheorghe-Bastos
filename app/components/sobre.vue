<template>
    <div class="flex flex-col items-center justify-around gap-4">
        <UPageCard class="flex items-center"
        orientation="vertical" spotlight spotlight-color="primary">
            
            <div class="flex items-center">
                <h2 class="text-2xl text-pretty text-highlighted font-bold">PRAZER, ME CHAMO GHEORGHE BASTOS.</h2>
            </div>
            <div>
                <p class="text-lg text-pretty text-neutral-400">Desenvolvedor e aluno do 5º período da escola de
            tecnologia da UNDB. Possuo projetos web utilizando
            Vue.js e Tailwind CSS. Fiz contribuições em projetos
            acadêmicos para aplicações desktop em Python e Java
            respectivamente. Busco estágio na area da TI, a fim de
            obter mais conhecimento para me tornar
            desenvolvedor fullstack e contribuir nos projetos da
            empresa.</p>
            </div>
            <div class="flex justify-around w-full">
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
    </div>
</template>