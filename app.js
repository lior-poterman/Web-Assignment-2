// Lior Poterman: 315368035, Abo Rabia Rami: 314820135
const router = require("express").Router();

// handle the valid route by returning positive status (200)
router.get("/", async (req, res) => {
  try {
    res.status(200).json("good");
  } catch (error) {
    return res.status(500).send();
  }
});

// handle all the other routes with * meaning anything after the "/" by returning negative status (404)
router.get("/*", async (req, res) => {
  try {
    res.status(404).json("bad");
  } catch (error) {
    return res.status(500).send();
  }
});

// export the router handler to use in the server.js
module.exports = router;
