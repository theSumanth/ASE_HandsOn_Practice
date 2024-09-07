const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  data: {
    type: Number,
    required: true,
  },
  planType: {
    type: String,
    required: true,
  },
  validity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Plan", planSchema);
