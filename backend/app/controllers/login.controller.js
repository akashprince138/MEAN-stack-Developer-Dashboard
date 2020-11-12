const User = require("../models/user.model.js");
bcrypt = require("bcrypt");
const saltRounds = 10;

// Create and Save a new user
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      status: "error",
      message: "Please enter username and password.",
    });
  }
  const userData = await User.findOne({ email: req.body.email });
  if (userData) {
    const cmp = await bcrypt.compare(req.body.password, userData.password);
    if (cmp) {
      res.status(200).send({
        status: "success",
        message: "User loggedin successfully.",
      });
    } else {
      res.status(500).send({
        status: "error",
        message: "Wrong Email or password.",
      });
    }
  } else {
    res.status(500).send({
      status: "error",
      message: "Email does not exist.",
    });
  }
};
