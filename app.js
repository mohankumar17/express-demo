const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRoutes = require("./routes/admin");
const homePageRoutes = require("./routes/homepage");

// app.use((req, res, next) => {
//   console.log("Middleware-1");
//   next(); //Allows the request to continue to next middleware.
// });

// app.use((req, res, next) => {
//   console.log("Middleware-2");
//   res.send("<h2>Express.js</h2>");
// });

app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", (req, res, next) => {
//   console.log("Root Middleware");
//   next();
// });

app.use("/admin", adminRoutes);
app.use(homePageRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h2>Page not found</h2>");
});

const server = http.createServer(app);

server.listen(3000);
