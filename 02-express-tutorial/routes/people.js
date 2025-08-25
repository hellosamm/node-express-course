const express = require("express");
const router = express.Router();

// const { people } = require("../data");
const {
  addPerson,
  getPeople,
  getPersonById,
} = require("../controllers/people.js");

router.get("/", getPeople);

// post people data
router.post("/", addPerson);

router.get("/:id", getPersonById);

module.exports = router;
