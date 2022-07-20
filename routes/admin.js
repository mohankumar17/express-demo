const express = require("express");

const router = express.Router();

router.get("/patient", (req, res, next) => {
  console.log("Add Patient Middleware");
  const formEl = `<div>
        <h2>Add Patient</h2>
        <form action="/admin/patient" method="POST">
          <input type="text" name="name" placeholder="Enter Name" />
          <button type="submit">Add</button>
        </form>
      </div>`;
  res.send(formEl);
});

router.post("/patient", (req, res, next) => {
  console.log("Show Patient Middleware - ", req.body);
  res.redirect("/");
});

module.exports = router;
