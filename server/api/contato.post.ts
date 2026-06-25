import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const resend = new Resend(config.resendApiKey)

  const body = await readBody(event)

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'gheorghe.bastos.ofc@gmail.com',
    subject: `[Contato Portfólio] ${body.assunto}`,
    replyTo: body.email,
    html: `<p><strong>Nome:</strong> ${body.nome}</p><p><strong>Email:</strong> ${body.email}</p><p><strong>Mensagem:</strong> ${body.mensagem}</p>`
  })

  if (error) {
    throw createError({ statusCode: 500, message: error.message })
  }

  return { sucesso: true, data }
})
