import { configureStore } from "@reduxjs/toolkit";

import state from "./slice/_slice";

const store = configureStore({
  reducer: state,
});

export { store };
