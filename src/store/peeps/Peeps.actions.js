import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPeeps, fetchPeep, postPeep, deletePeep } from '../../apis/peep';

export const loadPeeps = createAsyncThunk(
  'peeps/loadPeeps',
  async (thunkAPI) => {
    try {
      const response = await fetchPeeps();
      return response;
    } catch(err) {
      throw err;
    }
  }
);

export const loadPeep = createAsyncThunk(
  'peeps/loadPeep',
  async (peepId, thunkAPI) => {
    try {
      const response = await fetchPeep(peepId);
      return response;
    } catch(err) {
      throw err;
    }
  }
);

export const uploadPeep = createAsyncThunk(
  'peeps/uploadPeep',
  async ({message, sessionKey, userId}, thunkAPI) => {
    try {
      const response = await postPeep({message, sessionKey, userId});
      return response;
    } catch(err) {
      throw err;
    }
  }
);

export const removePeep = createAsyncThunk(
  'peeps/removePeep',
  async ({sessionKey, peepId}, thunkAPI) => {
    try {
      const response = await deletePeep(sessionKey, peepId);
      return {
        response: response,
        peepId: peepId
      };
    } catch(err) {
      throw err;
    }
  }
);