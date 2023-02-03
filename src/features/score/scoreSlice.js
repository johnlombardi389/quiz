import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  gameOver: false,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      state.score += 1;
    },
    reset: (state) => {
      state.score = 0;
    },
    endGame: (state) => {
      state.gameOver = true;
    },
  },
});

export const { increment, reset, endGame } = scoreSlice.actions;

export default scoreSlice.reducer;
