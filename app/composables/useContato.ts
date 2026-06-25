import { type Usuario } from '../types/usuario'

export const useContato = () => {

  interface ErroValidacao {
    campo: string;
    mensagem: string;
  }

  function validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function sanitizar(str: string): string {
    return str.trim().replace(/<[^>]*>/g, '');
  }

  async function enviarEmail(dados: { nome: string; email: string; assunto: string; mensagem: string }) {
    const erros: ErroValidacao[] = [];

    if (!dados.nome || sanitizar(dados.nome).length === 0) {
      erros.push({ campo: 'nome', mensagem: 'O nome é obrigatório.' });
    }

    if (!dados.email || !validarEmail(dados.email)) {
      erros.push({ campo: 'email', mensagem: 'Informe um e-mail válido.' });
    }

    if (!dados.assunto || sanitizar(dados.assunto).length === 0) {
      erros.push({ campo: 'assunto', mensagem: 'O assunto é obrigatório.' });
    }

    if (!dados.mensagem || sanitizar(dados.mensagem).length === 0) {
      erros.push({ campo: 'mensagem', mensagem: 'A mensagem é obrigatória.' });
    }

    if (dados.mensagem.length > 1000) {
      erros.push({ campo: 'mensagem', mensagem: 'A mensagem deve conter no máximo 1000 caracteres.' });
    }

    if (erros.length > 0) {
      return { sucesso: false, erros };
    }

    const usuario: Usuario = {
      id: 0,
      nome: sanitizar(dados.nome),
      email: dados.email.trim(),
      assunto: sanitizar(dados.assunto),
      mensagem: sanitizar(dados.mensagem),
    };

    try {
      const response = await $fetch('/api/contato', {
        method: 'POST',
        body: usuario
      })

      return { sucesso: true, data: response }
    } catch (error) {
      return { sucesso: false, erros: [{ campo: 'geral', mensagem: 'Erro ao enviar e-mail. Tente novamente.' }] }
    }
  }

  return { enviarEmail };
}
