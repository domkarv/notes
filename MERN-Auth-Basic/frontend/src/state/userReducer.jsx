import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

export const userSlice = createSlice({
  name: "user",
  initialState: user ? user : null,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },

    logout: () => {
      localStorage.removeItem("user");
      return null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
