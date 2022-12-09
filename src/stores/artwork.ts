import { createSlice } from '@reduxjs/toolkit';

interface artworkState {
  activeSlideIdx: number;
  activePart: string;
  topBtn: boolean;
}

const initialState: artworkState = {
  activeSlideIdx: 0,
  activePart: 'visual',
  topBtn: true
};

export const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    setActive(state, action) {
      state.activeSlideIdx = action.payload.idx;
      state.activePart = action.payload.part;
    },
    setTopBtn(state, action) {
      state.topBtn = action.payload;
    }
  }
});

export const { setActive, setTopBtn } = artworkSlice.actions;

export default artworkSlice.reducer;
