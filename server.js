//CONFIGURACOES INICIAIS
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//DADOS MOCKADOS
let medicos = [
  {
    id: 1,
    nome: "Dr. João Silva",
    email: "drjoaosilva@voluntarios.med.br",
    telefone: "(11) 99988-4321",
    mensagem:
      "Especialidade: Cardiologia - Atendimento gratuito para pessoas em situação de vulnerabilidade social. Agende sua consulta pelo telefone ou e-mail.",
  },
  {
    id: 2,
    nome: "Dra. Maria Oliveira",
    email: "dramariaoliveira@voluntarios.med.br",
    telefone: "(11) 99977-1234",
    mensagem:
      "Especialidade: Pediatria - Atendimento gratuito para pessoas em situação de vulnerabilidade social. Agende sua consulta pelo telefone ou e-mail.",
  },
  {
    id: 3,
    nome: "Dr. Carlos Souza",
    email: "drcarlossouza@voluntarios.med.br",
    telefone: "(11) 99966-9876",
    mensagem:
      "Especialidade: Ortopedia - Atendimento gratuito para pessoas em situação de vulnerabilidade social. Agende sua consulta pelo telefone ou e-mail.",
  },
];

let dentistas = [
  {
    id: 1,
    nome: "Dr. Ana Costa",
    email: "draanacosta@voluntarios.med.br",
    telefone: "(11) 99955-4321",
    mensagem:
      "Especialidade: Odontologia - Atendimento gratuito para pessoas em situação de vulnerabilidade social. Agende sua consulta pelo telefone ou e-mail.",
  },
  {
    id: 2,
    nome: "Dr. Pedro Lima",
    email: "drpedrolima@voluntarios.med.br",
    telefone: "(11) 99944-1234",
    mensagem:
      "Especialidade: Endodontia - Atendimento gratuito para pessoas em situação de vulnerabilidade social. Agende sua consulta pelo telefone ou e-mail.",
  },
  {
    id: 3,
    nome: "Dra. Carla Mendes",
    email: "dracarmendes@voluntarios.med.br",
    telefone: "(11) 99933-2143",
    mensagem:
      "Especialidade: Periodontia - Atendimento gratuito para pessoas em situação de vulnerabilidade social. Agende sua consulta pelo telefone ou e-mail.",
  },
];

let medicosDentistas = [...medicos, ...dentistas];

// MIDDLEWARES JSON
app.use(express.json());
