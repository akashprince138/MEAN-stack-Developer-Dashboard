const User = require("../models/user.model.js");

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.phone_number ||
    !req.body.profile_image
  ) {
    return res.status(400).send({
      message: "User fields can not be empty",
    });
  }
  // Create a user
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    profile_image: req.body.profile_image,
  });

  // Save user in the database
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {};

// Update a user identified by the userId in the request
exports.update = (req, res) => {};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {};
