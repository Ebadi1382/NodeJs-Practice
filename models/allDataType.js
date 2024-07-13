const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Boolean,
  },
  website: {
    required: true,
    type: String,
  },
  company: {
    required: true,
    type: String,
    enum: ["gr", "app", "book"],
  },
  date: {
    default: new Date().toLocaleDateString("fa-IR", { hour: "2-digit", minute: "2-digit" }),
    type: String,
  },
});

module.exports = mongoose.model("category", categorySchema);
