import { createSlice } from "@reduxjs/toolkit";

const portFolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    defaultTheme: "light",
    rawDataMapping: {},
    activeItem: "home",
  },
  reducers: {
    setDarkTheme: (state, action) => {
      console.log("sdf", action);
      state.defaultTheme = action.payload;
    },
    saveConfiration: (state, action) => {
      state.rawDataMapping = action.payload;
    },
    setActiveItem: (state, data) => (state.activeItem = data.payload),
  },
});

export const { setDarkTheme, saveConfiration, setActiveItem } = portFolioSlice.actions;

export default portFolioSlice.reducer;
