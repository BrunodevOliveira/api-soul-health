// definição de schema que mapeia uma collection no mongoDB
const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
   name: {
    type: String,
    required: true,
  },
  cpf: {
    type: Number,
    required: true,
  },
  
  phone: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = model("User", UserSchema);
