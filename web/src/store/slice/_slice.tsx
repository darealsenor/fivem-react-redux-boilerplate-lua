import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    name: 'Senor'
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    SetName: (state: any, action: <PayloadAction>) => {
      state.name = action.payload;
    },
  },
});

export const { SetName } =
  stateSlice.actions;
export default stateSlice.reducer;
