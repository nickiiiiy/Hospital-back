const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tokenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  refreshToken: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Users",
  // },
});

module.exports = Token = mongoose.model("Tokens", tokenSchema);
