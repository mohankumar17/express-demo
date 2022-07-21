const express = require("express");

const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData.patients);
  res.render("home", { pageTitle: "Homepage", patients: adminData.patients });
});

module.exports = router;
