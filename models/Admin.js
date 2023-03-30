const mongoose = require("mongoose");
// const products = require("../data/products");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;