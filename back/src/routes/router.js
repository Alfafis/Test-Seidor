"use strict";

const express = require("express");
const router = express.Router();

const funcionarios = require("../controller/funcionario");

router.get("/", funcionarios.getFuncionario);
router.get("/Nome/:nome", funcionarios.getByNome);
router.get("/Cpf/:cpf", funcionarios.getByCpf);
router.get("/Cargo/:cargo", funcionarios.getByCargo);
router.get("/UfNasc/:ufnasc", funcionarios.getByUfnasc);
router.get("/Salario/:salario", funcionarios.getBySalario);
router.get("/Datacad/:datacad", funcionarios.getByDataCad);
// router.post("/");

module.exports = router;
