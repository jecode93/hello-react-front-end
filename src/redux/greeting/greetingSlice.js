import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'http://127.0.0.1:3000/api/v1/greetings';

export const getRandomGreeting = createAsyncThunk(
  'greeting/getRandomGreeting',
  async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.response.data;
    }
  },
);

const initialState = {
  greeting: '',
  isLoading: false,
  error: undefined,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRandomGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload.message;
      })
      .addCase(getRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default greetingSlice.reducer;
