import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: null,
  reducers: {
    setWorkouts: (state, action) => {
      return action.payload;
    },
    createWorkout: (state, action) => {
      return [action.payload, ...state];
    },
    deleteWorkout: (state, action) => {
      return state.filter((w) => w._id !== action.payload._id);
    },
  },
});

export const { setWorkouts, createWorkout, deleteWorkout } =
  workoutSlice.actions;

export default workoutSlice.reducer;
