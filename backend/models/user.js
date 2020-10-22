const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  firstName: String,
  lastName: String,
  ehr_id: String,
  telecom: Object,
  birthDate: String
});

module.exports = mongoose.model("users", user);