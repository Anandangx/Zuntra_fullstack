const express =
require("express");

const multer =
require("multer");

const Post =
require("../models/Post");

const authMiddleware =
require("../middleware/authMiddleware");

const router =
express.Router();

/* MULTER STORAGE */

const storage =
multer.diskStorage({

  destination:
  function(req, file, cb) {

    cb(
      null,
      "uploads/"
    );

  },

  filename:
  function(req, file, cb) {

    cb(

      null,

      Date.now()
      + "-"
      + file.originalname

    );

  }

});

const upload =
multer({
  storage
});

/* GET POSTS */

router.get(
  "/fetch",
  async(req, res) => {

    try {

      const posts =
      await Post.find();

      res.json(posts);

    } catch(err) {

      res.status(500).json(err);

    }

});

/* CREATE POST */

router.post(
  "/create",
  authMiddleware,

  upload.single("image"),

  async(req, res) => {

    try {

      const post =
      new Post({

        title:
        req.body.title,

        image:
        req.file.path

      });

      await post.save();

      res.json(post);

    } catch(err) {

      res.status(500).json(err);

    }

});

module.exports = router;