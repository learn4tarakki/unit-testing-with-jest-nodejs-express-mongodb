const mongoose = require("mongoose");

const schema = mongoose.Schema({
  firstname: String,
});

module.exports = mongoose.model("users", schema);