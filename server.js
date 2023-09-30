// Lior Poterman: 315368035, Abo Rabia Rami: 314820135
// * packages used: express
const express = require("express");

// create express app
const app = express();

// use the express middleware to parse the requests recived
app.use(express.json());

// using the routes handler in app.js
app.use("/", require("./app.js"));

// server listen at port 3000
app.listen(3000, () => {
  console.log("live at 3000");
});
