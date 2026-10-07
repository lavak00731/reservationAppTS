import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^\w+([\.-]?\w+)*@^\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  telephone: {
    type: String,
    required: true,
    trim: true,
    match: /^\+?[1-9]\d{1,14}$/,
  },
  dni: {
    type: String,
    required: true,
    trim: true,
    match: /^\d{7,8}$/,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
