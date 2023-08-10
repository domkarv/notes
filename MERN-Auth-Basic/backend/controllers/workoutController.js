const User = require('../models/user-workout.model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const getEmailFromToken = (token) => {
  const header = JSON.parse(token);

  if (!header) return Error('No token provided');

  const decoded = jwt.verify(header.token, process.env.JWT_SECRET);

  return decoded.email;
};

// get all workouts
const getWorkouts = async (req, res) => {
  const email = getEmailFromToken(req.headers['x-access-token']);

  try {
    const user = await User.find({ email });
    const workouts = user[0].workouts;
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create new workout
const createWorkout = async (req, res) => {
  const email = getEmailFromToken(req.headers['x-access-token']);

  const { title, load, reps } = req.body;

  if (!title || !load || !reps) {
    return res.status(400).json({ error: 'Please fill in all the fields' });
  }

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { $push: { workouts: { title, load, reps } } },
      { new: true }
    );

    const newWorkout = user.workouts[user.workouts.length - 1]; // Get the last workout in the array

    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const email = getEmailFromToken(req.headers['x-access-token']);
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' });
  }

  try {
    await User.findOneAndUpdate(
      { email },
      { $pull: { workouts: { _id: id } } },
      { new: true }
    );
    res.status(200).json({ status: 'ok' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  const email = getEmailFromToken(req.headers['x-access-token']);
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' });
  }

  const { title, reps, load } = req.body;

  try {
    await User.findOneAndUpdate(
      { email, 'workouts._id': id },
      {
        $set: {
          'workouts.$.title': title,
          'workouts.$.reps': reps,
          'workouts.$.load': load,
        },
      },
      { new: true }
    );
    res.status(200).json({ status: 'ok' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
