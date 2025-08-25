const { people } = require("../data");

const getPeople = (req, res) => {
  res.json({ people });
};

// post people data
const addPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name" });
  }

  people.push({ id: people.length + 1, name: req.body.name });
  res.status(201).json({ success: true, name: req.body.name });
};

const getPersonById = (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find((p) => p.id === id);

  if (!person) {
    return res.status(400).json({ success: false, msg: "Unable to find user" });
  }

  res.status(201).json({ success: true, person });
};

module.exports = { getPeople, addPerson, getPersonById };
