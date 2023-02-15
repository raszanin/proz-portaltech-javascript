CREATE DATABASE escola;
use DATABASE escola;

create TABLE aluno (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(30) not NULL,
  matricula INTEGER not NULL UNIQUE,
  email VARCHAR(30) not NULL,
  endereco VARCHAR(30) not NULL,
  telefone VARCHAR(13) not NULL
)