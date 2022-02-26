//criação da conexão com o banco de dados
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.MONGODB_URI); // a chave de acesso fica configurada no arquivo .env
}

main()
  .then(() => console.log("Conectado"))
  .catch((e) => console.log(e));

module.exports = mongoose;