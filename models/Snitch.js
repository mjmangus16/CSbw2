const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SnitchSchema = new Schema({
  snitch_id: {
    type: Number,
    default: 1
  },
  snitch_location: {
    type: Number
  }
});

module.exports = Snitch = mongoose.model("snitchLocation", SnitchSchema);
