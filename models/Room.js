const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
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

module.exports = Rooms = mongoose.model("rooms", RoomSchema);
