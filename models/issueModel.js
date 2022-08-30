const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  title: String,
  team: String,
  assignedBy : {type:Types.ObjectId,ref:"users"},
  description: String,
  assignTo: String,
});

module.exports = model("issues", schema);