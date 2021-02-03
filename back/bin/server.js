// declaração de resquest http, debug e express
const app = require("../src/app");
const debug = require("debug")("balta:server");
const http = require("http");

// instanciando express e declarando a porta para API
const port = verifyPort(process.env.PORT || "3030");
app.set("port", port);

// criando a routa do server
const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
console.log("start in port", port);

// function para validar os valores para a porta do server
function verifyPort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

//function para tratamento de erro
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // tratamento do error
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// function para Debbuger
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "Pipe " + addr : "Port " + addr.port;
  debug("Listening on " + bind);
}
