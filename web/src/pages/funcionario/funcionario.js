import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
// import api from "../../services/api";

import "./style.css";
import logo from "../../assets/logo.png";

const Funcionario = () => {
  return (
    <div id="funcionario">
      <div className="contend">
        <header>
          <Link to="/">
            <span>
              <FiArrowLeft />
            </span>
            Voltar para home
          </Link>
          <img src={logo} alt="Seidor" />
        </header>
        <form>
          <h1>Cadastro para base da dados</h1>
          <fieldset>
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field-group">
              <div className="field">
                <label htmlFor="cargo">Cargo</label>
                <input type="text" name="cargo" id="cargo" />
              </div>
              <div className="field">
                <label htmlFor="cpf">Cpf</label>
                <input type="number" name="cpf" id="cpf" />
              </div>
            </div>
            <div className="field-group">
              <div className="field">
                <label htmlFor="UfNasc">Estado de Nascimento</label>
                <input type="text" name="UfNasc" id="UfNasc" />
              </div>
              <div className="field">
                <label htmlFor="whatsapp">Salario</label>
                <input type="number" name="salario" id="salario" />
              </div>
            </div>
            <div className="field-group">
              <label>Ativo:</label>
              <div className="field">
                <input type="checkbox" name="ativo" id="ativo" />
              </div>
              <label>Inativo:</label>
              <div className="field">
                <input type="checkbox" name="inativo" id="inativo" />
              </div>
            </div>
          </fieldset>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Funcionario;
