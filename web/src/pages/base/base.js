import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./style.css";
import logo from "../../assets/logo.png";

const Base = () => {
  const [dados, setDados] = useState([]);

  //Paginacao em andamento
  // const [pageNumber, SetpageNumber] = useState(0);
  // const arrayPerPage = 10;
  // const pagesVisited = pageNumber * arrayPerPage;
  // const displayDados = dados.map((data, i) => {
  //   return (
  //     <tr>
  //       <td key={`${i + "a"}`}>{data.DataCad}</td>
  //       <td key={`${i + "b"}`}>{data.Cargo}</td>
  //       <td key={`${i + "c"}`}>{data.Cpf}</td>
  //       <td key={`${i + "d"}`}>{data.Nome}</td>
  //       <td key={`${i + "e"}`}>{data.UfNasc}</td>
  //       <td key={`${i + "f"}`}>{data.Salario}</td>
  //       <td key={`${i + "g"}`}>{data.Status}</td>
  //     </tr>
  //   );
  // });

  useEffect(() => {
    api.get("/").then((response) => {
      const res = response.data;
      setDados(res);
    });
  }, []);

  function handleSubmit() {
    const search = document.querySelector("#search").value;
    const options = document.querySelector("#selected").value;
    api.get(`${"/" + options + "/" + search}`).then((response) => {
      const resp = response.data;
      setDados(resp);
    });
  }

  return (
    <div id="base">
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
        <div className="table-border">
          <h1>Dados dos Funcionarios</h1>
          <div className="field-group">
            <div className="field">
              <label>Pesquisar:</label>
              <input type="text" id="search" onChange={handleSubmit} />
            </div>
            <div className="field">
              <label>Tipo de dado:</label>
              <select id="selected">
                <option disabled="disabled">Selecione uma cidade</option>
                <option>Datacad</option>
                <option>Cargo</option>
                <option>Cpf</option>
                <option>Nome</option>
                <option>UfNasc</option>
                <option>Salario</option>
              </select>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Datacad</th>
                <th>Cargo</th>
                <th>Cpf</th>
                <th>Nome</th>
                <th>UfNasc</th>
                <th>Salario</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((data, i) => (
                <tr>
                  <td key={`${i + "a"}`}>{data.DataCad}</td>
                  <td key={`${i + "b"}`}>{data.Cargo}</td>
                  <td key={`${i + "c"}`}>{data.Cpf}</td>
                  <td key={`${i + "d"}`}>{data.Nome}</td>
                  <td key={`${i + "e"}`}>{data.UfNasc}</td>
                  <td key={`${i + "f"}`}>{data.Salario}</td>
                  <td key={`${i + "g"}`}>{data.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="paginate">
            <button type="button" className="page"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
