import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  age: 0,
  admin: false,
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.username = payload.username;
      state.password = payload.password;
      state.email = payload.email;
      state.age = payload.age;
      state.admin = payload.admin;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
