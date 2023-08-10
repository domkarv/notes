const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  workouts: [workoutSchema], // Embed the workoutSchema within workouts array
});

// static signup method
userSchema.statics.signUp = async function (name, email, password) {
  if (!name || !email || !password)
    throw Error('All fields must be filled out');

  if (!validator.isEmail(email)) throw Error('Invalid Email Address');
  if (!validator.isStrongPassword(password))
    throw Error('Password is not strong enough');
  if (!validator.isLength(name, { min: 3, max: 20 }))
    throw Error('Name must be between 3 and 20 characters');

  const exists = await this.findOne({ email });
  if (exists) throw Error('Email already in use');

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = await this.create({ name, email, password: hash });
  return newUser;
};

// static login method
userSchema.statics.logIn = async function (email, password) {
  if (!email || !password) throw Error('All fields must be filled out');

  const user = await this.findOne({ email });
  if (!user) throw Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw Error('Invalid credentials');

  return user;
};

module.exports = mongoose.model('', userSchema, 'user-workouts-data');
