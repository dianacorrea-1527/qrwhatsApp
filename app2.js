const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
//const { Client, LegacySessionAuth } = require('whatsapp-web.js');
const fs = require("fs");
/* const ora = require ('ora') */

/* const chalk = require ('chalk') */
const SESSION_FILE_PATH = "./session.json";
let sessionData;
let client;

//se crea una funcion para cuando tenga la sesion guardada

client = new Client({
  authStrategy: new LocalAuth(),
});
client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", () => {
  console.log("cliente esta autenticado");
});

//funcion que nos informa que el dispositivo esta listo
client.on("ready", () => {
  console.log("cliente esta listo nene");

  //spinner.stop();
});

//se crea una funcion para cuando no tenga sesion guardada

client.on("message", (msg) => {
  //se hace destructuring
  const { from, to, body } = msg;
  console.log(from, to, body);
  sendMessage(
    from,
    "tutorial de como hablarme : vamos a beber "
  );
});

const sendMessage = (to, message) => {
  client.sendMessage(to, message);
};
