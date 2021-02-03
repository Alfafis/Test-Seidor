"use strict";

// import biblioteca fs
const fs = require("fs");

var database = [];

fs.readFile("./src/model/baseTratada.json", "utf8", (error, data) => {
  if (error) {
    console.log("Erro ao ler arquivo", error);
    return error;
  }
  database = JSON.parse(data);
});

module.exports = class Funcionarios {
  async get() {
    return await database;
  }
  async getByNome(nome) {
    let resultName = database.filter((x) => {
      return x.Nome.indexOf(nome) > -1;
    });
    return await resultName;
  }
  async getByCPF(cpf) {
    let resultCpf = database.filter((x) => {
      return x.Cpf.indexOf(cpf) > -1;
    });
    return await resultCpf;
  }
  async getByCargo(cargo) {
    let resultCargo = database.filter((x) => {
      return x.Cargo.indexOf(cargo) > -1;
    });
    return await resultCargo;
  }
  async getByDataCad(datacad) {
    let resultDataCad = database.filter((x) => {
      return x.Datacad.indexOf(datacad) > -1;
    });
    return await resultDataCad;
  }
  async getByUfnasc(ufnasc) {
    let resultUfnasc = database.filter((x) => {
      return x.Ufnasc.indexOf(ufnasc) > -1;
    });
    return await resultUfnasc;
  }
  async getBySalario(salario) {
    let resultSalario = database.filter((x) => {
      return x.Salario.indexOf(salario) > -1;
    });
    return await resultSalario;
  }
  async getByStatus(status) {
    let resultStatus = database.filter((x) => {
      return x.Status.indexOf(status) > -1;
    });
    return await resultStatus;
  }
  async postFuncionario(funcionario) {
    let resultFuncionario = database.filter((x) => {
      return x.Funcionario.indexOf(funcionario) > -1;
    });
    return await resultFuncionario;
  }
  async deleteCpf(cpf) {
    let resultCpf = database.filter((x) => {
      return x.Cpf.indexOf(cpf) > -1;
    });
    return await resultCpf;
  }
};
