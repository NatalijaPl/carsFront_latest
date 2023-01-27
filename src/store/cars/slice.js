import { createSlice } from "@reduxjs/toolkit";

const car = createSlice({
  name: "Cars",
  initialState: {
    model: "",
    brand: "",
    year: "",
    max_speed: "",
    is_automatic: "",
    engine: "",
    number_of_doors: "",
  },
  reducers: {
    createUser: (state, actions) => {
      state.model = actions.payload.model;
      state.brand = actions.payload.brand;
      state.year = actions.payload.year;
      state.max_speed = actions.payload.max_speed;
      state.is_automatic = actions.payload.is_automatic;
      state.engine = actions.payload.engine;
      state.number_of_doors = actions.payload.number_of_doors;
    },
  },
});

export const { createCar } = car.actions;
export default car.reducer;
