const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Room2Schema = new Schema({
  room_id: {
    type: Number
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  coordinates: {
    type: String
  },
  exits: {
    type: Object
  },
  messages: {
    type: Array
  },
  elevation: {
    type: Number
  },
  terrain: {
    type: String
  },
  items: {
    type: Array
  }
});

module.exports = Rooms2 = mongoose.model("newWorld", Room2Schema);
