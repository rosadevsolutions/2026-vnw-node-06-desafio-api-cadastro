const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let medicos = [
  { id: 1, nome: "Dr. João Silva", especialidade: "Cardiologia" },
  { id: 2, nome: "Dra. Maria Oliveira", especialidade: "Pediatria" },
  { id: 3, nome: "Dr. Carlos Souza", especialidade: "Ortopedia" },
];

let dentistas = [
  { id: 1, nome: "Dr. Ana Costa", especialidade: "Ortodontia" },
  { id: 2, nome: "Dr. Pedro Lima", especialidade: "Endodontia" },
  { id: 3, nome: "Dra. Luisa Fernandes", especialidade: "Periodontia" },
];

let medicosDentistas = [...medicos, ...dentistas];

app.use(express.json());
