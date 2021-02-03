import React from "react";
import { Link } from "react-router-dom";
import { FiChevronsRight, FiPlus } from "react-icons/fi";

import "./style.css";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Seidor" />
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>
          <div className="buttons">
            <Link to="/base">
              <strong>Acessar Base de Dados</strong>
              <span>
                <FiChevronsRight />
              </span>
            </Link>
            <Link to="/funcionario">
              <strong>Cadastrar Funcionario</strong>
              <span>
                <FiPlus />
              </span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
