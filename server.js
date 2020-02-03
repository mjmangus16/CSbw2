const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

const roomRouter = require("./routes/RoomsRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connect"))
  .catch(err => console.log(err));

server.use("/api/room", roomRouter);

const port = process.env.PORT || 6000;

server.listen(port, () => console.log(`Server running on port ${port}`));
