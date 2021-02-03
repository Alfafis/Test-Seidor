const funcionarios = require("../model/funcionario");

const model = new funcionarios();

exports.getFuncionario = (req, res, next) => {
  model
    .get(req)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.getByNome = (req, res, next) => {
  model
    .getByNome(req.params.nome)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.getByCpf = (req, res, next) => {
  model
    .getByCpf(req.params.cpf)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.getByCargo = (req, res, next) => {
  model
    .getByCargo(req.params.cargo)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.getByDataCad = (req, res, next) => {
  model
    .getByDataCad(req.params.datacard)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.getByUfnasc = (req, res, next) => {
  model
    .getByUfnasc(req.params.datacard)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.getBySalario = (req, res, next) => {
  model
    .getBySalario(req.params.salario)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.getByStatus = (req, res, next) => {
  model
    .getByStatus(req.params.status)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.postFuncionario = (req, res, next) => {
  model
    .postFuncionario(req.params.funcionario)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.DeleteCpf = (req, res, next) => {
  model
    .DeleteCpf(req.params.cpf)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
