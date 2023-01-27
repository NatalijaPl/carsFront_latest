import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "User",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    getAllUser: (state, actions) => {
      state.email = actions.payload.email;
      state.password = actions.payload.password;
    },

    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { createUser } = user.actions;
export default user.reducer;
