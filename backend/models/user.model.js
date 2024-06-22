const mongoose = require("mongoose");

const shippingAddressSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    specificAddress: { type: String, required: true },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  shippingAddress: { type: [shippingAddressSchema], default: [] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;