import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  brithday: {
    type: String,
    required: true
  },
  date: {
    type: Date,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'country'
  }
});

export const User = mongoose.model("User", userSchema);
