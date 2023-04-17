var express = require("express");
var router = express.Router();
const User = require("../models/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Instagram" });
});
router.post("/spotify", async (req, res, next) => {
  console.log(req.body);
  const user = await User.create(req.body);
  res.render("spotify", { title: "Spotify" });
});

module.exports = router;
