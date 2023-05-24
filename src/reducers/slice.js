import { createSlice } from "@reduxjs/toolkit";

const portFolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    defaultTheme: "light",
    rawDataMapping:{},
  },
  reducers: {
    setDarkTheme: (state, action) => {
      console.log("sdf",action);
      state.defaultTheme = action.payload;
    },
    saveConfiration: (state, action) => {
      state.rawDataMapping = action.payload;
    }
  },
});

export const { setDarkTheme, saveConfiration } = portFolioSlice.actions;

export default portFolioSlice.reducer;
