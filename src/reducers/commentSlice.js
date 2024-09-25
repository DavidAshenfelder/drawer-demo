import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: '',
  files: []
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    onType: (state, action) => {
        console.log(state);
        console.log(action);
    }
  }
});

export const { onType } = commentSlice.actions

export default commentSlice.reducer;