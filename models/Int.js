const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IntSchema = new Schema({
  snitch_id: {
    type: Number,
    default: 1
  },
  snitch_location: {
    type: Number
  }
});

module.exports = Int = mongoose.model("int", IntSchema);
