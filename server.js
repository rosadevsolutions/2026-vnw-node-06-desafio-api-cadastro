//CONFIGURACOES INICIAIS
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//DADOS MOCKADOS
let voluntarios = [
  {
    id: 1,
    nome: "Romulo Rosa",
    email: "drromulorosa@voluntarios.med.br",
    telefone: "(11) 99988-4321",
    mensagem:
      "Especialidade: Cardiologia - Atendimento gratuito para pessoas em situação de vulnerabilidade social. Agende sua consulta pelo telefone ou e-mail.",
  },
  {
    id: 2,
    nome: "Jeferson Santos",
    email: "drjefersonsantos@voluntarios.med.br",
    telefone: "(11) 99977-1234",
    mensagem:
      "Especialidade: Pediatria - Atendimento gratuito para pessoas em situação de vulnerabilidade social. Agende sua consulta pelo telefone ou e-mail.",
  },
  {
    id: 3,
    nome: "Vinicius Bispo",
    email: "drviniciusbispo@voluntarios.med.br",
    telefone: "(11) 99966-9876",
    mensagem:
      "Especialidade: Ortopedia - Atendimento gratuito para pessoas em situação de vulnerabilidade social. Agende sua consulta pelo telefone ou e-mail.",
  },
];

app.use(express.json());

function validarNome(nome) {
  const regexNome = /^[a-zA-ZÀ-ÿ]{3}[a-zA-ZÀ-ÿ\s]{0,97}$/;
  return regexNome.test(nome);
}

function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function validarCelularTelefone(telefone) {
  const regexCelularTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  return regexCelularTelefone.test(telefone);
}

function validarMensagem(mensagem) {
  let status = mensagem.length <= 500 ? true : false;
  return status;
}

function validarCadastro(req, res, next) {
  const { nome, email, telefone, mensagem } = req.body;

  if (!nome || !validarNome(nome)) {
    return res.status(400).json({
      erro: "Nome é obrigatório!",
    });
  }

  if (!email || !validarEmail(email)) {
    return res.status(400).json({
      erro: "Email inválido!",
    });
  }

  if (!telefone || !validarCelularTelefone(telefone)) {
    return res.status(400).json({
      erro: "Telefone inválido!",
    });
  }
  if (!mensagem || !validarMensagem(mensagem)) {
    return res.status(400).json({
      erro: "Mensagem é obrigatória!",
    });
  }

  next();
}
