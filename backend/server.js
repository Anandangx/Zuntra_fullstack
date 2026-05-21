const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const authRoutes =
require("./routes/authRoutes");

const postRoutes =
require("./routes/postRoutes");

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static("uploads")
);

/* ROUTES */

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/posts",
  postRoutes
);

/* DATABASE */

mongoose.connect(
  process.env.MONGO_URI
)
.then(() => {

  console.log("MongoDB Connected");

})
.catch((err) => {

  console.log(err);

});

/* SERVER */

app.listen(
  process.env.PORT,
  () => {

    console.log(
      `Server running on ${process.env.PORT}`
    );

  }
);