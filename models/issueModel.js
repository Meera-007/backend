const { Schema, model } = require("../connection");

const schema = new Schema({
  title: String,
  team: String,
  description: String,
  assignTo: String,
});

module.exports = model("users", schema);