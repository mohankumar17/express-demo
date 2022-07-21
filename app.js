const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const adminData = require("./routes/admin");
const homePageRoutes = require("./routes/homepage");

app.set("view engine", "ejs");
app.set("views", "views");

// app.use((req, res, next) => {
//   console.log("Middleware-1");
//   next(); //Allows the request to continue to next middleware.
// });

// app.use((req, res, next) => {
//   console.log("Middleware-2");
//   res.send("<h2>Express.js</h2>");
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res, next) => {
//   console.log("Root Middleware");
//   next();
// });

app.use("/admin", adminData.router);
app.use(homePageRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

const server = http.createServer(app);

server.listen(3000);
