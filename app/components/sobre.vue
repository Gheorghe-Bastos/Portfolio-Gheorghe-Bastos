<template>
    <div class="flex items-center justify-center gap-4 w-xs min-h-screen">
        <UCard class="flex flex-col items-center justify-center rounded-xs w-xs">
            <h2 class="text-2xl font-display font-bold">SOBRE</h2>
            <p class="text-md lg:text-lg text-muted text-center">Olá! Sou o Gheorghe Bastos, estudante de Engenharia de Software e desenvolvedor focado em criar aplicações
            web modernas. Gosto de resolver problemas reais de usabilidade e arquitetura, unindo interfaces reativas a
            backends seguros. Sempre em busca de evolução e pronto para contribuir em projetos desafiadores.</p>
            <div class="flex justify-around w-full">
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-bold">Frontend</h2>
                    <div class="flex gap-2">
                        <UIcon color="primary" name="logos:tailwindcss-icon" class="size-6"/>
                        <UIcon color="primary" name="vscode-icons:file-type-vue" class="size-6"/>
                        <UIcon color="primary" name="devicon:nuxt" class="size-6"/>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-bold">Backend</h2>
                    <div class="flex gap-3">
                        <UIcon color="primary" name="vscode-icons:file-type-python" class="size-6"/>
                        <UIcon color="primary" name="logos:javascript" class="size-6"/>
                        <UIcon color="primary" name="ri:supabase-fill" class="size-6"/>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-bold">Ferramentas</h2>
                    <div class="flex gap-2">
                        <UIcon color="primary" name="logos:visual-studio-code" class="size-6" />
                        <UIcon color="primary" name="skill-icons:github-dark" class="size-6" />
                        <UIcon color="primary" name="vscode-icons:file-type-vercel" class="size-6" />
                    </div>
                </div>
            </div>
        </UCard>
    </div>
</template>