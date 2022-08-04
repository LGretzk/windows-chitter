import { createSlice } from '@reduxjs/toolkit';
import { loadPeeps, loadPeep, uploadPeep, removePeep } from './Peeps.actions';

const initialState = [];

const peepSlice = createSlice({
  name: 'peeps',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Load peeps success
      .addCase(loadPeeps.fulfilled, (state, action) => {
        return state = action.payload;
      })
      // Load peep by ID success
      .addCase(loadPeep.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      // Upload peep success
      .addCase(uploadPeep.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      // Delete peep success
      .addCase(removePeep.fulfilled, (state, action) => {
          return state.filter(peep => peep.id !== action.payload.peepId);
      })
  }
});

export default peepSlice.reducer;