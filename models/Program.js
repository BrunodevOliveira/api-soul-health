const { model, Schema } = require("mongoose");

const ProgramSchema = new Schema({
  specialty: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

module.exports = model("Program", ProgramSchema);