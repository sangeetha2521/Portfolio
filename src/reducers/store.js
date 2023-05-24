import { configureStore } from "@reduxjs/toolkit";
import portFolioreducer from "./slice";

export default configureStore({
  reducer: {
    portFolio: portFolioreducer,
  },
});
