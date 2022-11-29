import { createSlice } from '@reduxjs/toolkit';

interface artworkState {
  activeSlideIdx: number;
  activePart: string;
}

const initialState: artworkState = {
  activeSlideIdx: 0,
  activePart: 'visual'
};

export const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    setActive(state, action) {
      state.activeSlideIdx = action.payload.idx;
      state.activePart = action.payload.part;
    }
  }
});

export const { setActive } = artworkSlice.actions;

export default artworkSlice.reducer;
