const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    phone_number: Number,
    profile_image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
