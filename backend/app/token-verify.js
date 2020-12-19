const jwt = require("jsonwebtoken");
verifyToken = (req, res, next) => {
  const accessTokenSecret = "youraccesstokensecret";
  console.log("req", req);
  // Gather the jwt access token from the request header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // if there isn't any token

  jwt.verify(token, accessTokenSecret, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
};

module.exports = verifyToken;
