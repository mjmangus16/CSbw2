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
    type: Array
  },
  cooldown: {
    type: Number
  },
  errs: {
    type: Array
  },
  messages: {
    type: Array
  },
  elevation: {
    type: Number
  },
  terrain: {
    type: String
  }
});

module.exports = Rooms = mongoose.model("rooms", RoomSchema);
