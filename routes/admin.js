const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();
const patients = [];

// router.get("/patient", (req, res, next) => {
//   console.log("Add Patient Middleware");
//   const formEl = `<div>
//         <h2>Add Patient</h2>
//         <form action="/admin/patient" method="POST">
//           <input type="text" name="name" placeholder="Enter Name" />
//           <button type="submit">Add</button>
//         </form>
//       </div>`;
//   res.send(formEl);
// });

// router.post("/patient", (req, res, next) => {
//   console.log("Show Patient Middleware");
//   patients.push({ name: req.body.name });
//   res.redirect("/");
// });

router.get("/patient", (req, res, next) => {
  console.log("Add Patient Middleware");
  res.render("patient", { pageTitle: "Add Patient", path: "/admin/patient" });
});

router.post("/patient", (req, res, next) => {
  console.log("Show Patient Middleware");
  patients.push({ name: req.body.name });
  res.redirect("/");
});

module.exports = {
  router: router,
  patients: patients,
};
