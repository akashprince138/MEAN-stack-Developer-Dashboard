module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  // Create a new user
  app.post("/user", users.create);

  // Retrieve all users
  app.get("/users", users.findAll);

  // Retrieve a single user with userId
  app.get("/user/:id", users.findOne);

  // Update a user with userId
  app.put("/user/:id", users.update);

  // Delete a user with userId
  app.delete("/user/:userId", users.delete);
};
