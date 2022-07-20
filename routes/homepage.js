const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Home Page Middleware");
  res.send("<h2>Home Page</h2>");
});

module.exports = router;
