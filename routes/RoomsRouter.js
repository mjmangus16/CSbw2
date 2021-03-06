const express = require("express");
const router = express.Router();

const Rooms = require("../models/Room");
const Rooms2 = require("../models/Room2");
const Snitch = require("../models/Snitch");

// @route   GET api/graph/test
// @desc    Tests formats route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Graphs Works" }));

router.post("/addRoom", (req, res) => {
  const data = req.body;
  console.log(data);

  Rooms.findOne({ room_id: data.room_id })
    .then(room => {
      if (room) {
        console.log("test");
        res.json({
          error: "That room has already been added"
        });
      } else {
        const newRoom = new Rooms({ ...data });
        newRoom
          .save()
          .then(saved => {
            res.json(saved);
          })
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
});

router.get("/getRoom/:id", (req, res) => {
  const id = req.params.id;

  Rooms.findOne({ room_id: id })
    .then(room => {
      if (room) {
        res.json(room);
      } else {
        res.json({ error: "Could not find that room" });
      }
    })
    .catch(err => console.log(err));
});

router.get("/getAllRooms", (req, res) => {
  Rooms.find()
    .then(rooms => {
      res.json(rooms);
    })
    .catch(err => console.log(err));
});

router.post("/addRoom2", (req, res) => {
  const data = req.body;
  console.log(data);

  Rooms2.findOne({ room_id: data.room_id })
    .then(room => {
      if (room) {
        console.log("test");
        res.json({
          error: "That room has already been added"
        });
      } else {
        const newRoom = new Rooms2({ ...data });
        newRoom
          .save()
          .then(saved => {
            res.json(saved);
          })
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
});

router.get("/getAllRooms2", (req, res) => {
  Rooms2.find()
    .then(rooms => {
      res.json(rooms);
    })
    .catch(err => console.log(err));
});

router.post("/snitchLocation", (req, res) => {
  Snitch.findOneAndUpdate({ snitch_id: 1 }, { ...req.body }, { new: true })
    .then(updated => res.json(updated))
    .catch(err => res.json(err));
});

router.get("/snitchLocation", (req, res) => {
  Snitch.findOne({ snitch_id: 1 })
    .then(snitch => res.json(snitch))
    .catch(err => res.json(err));
});

module.exports = router;
