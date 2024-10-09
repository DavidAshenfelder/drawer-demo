import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer: (state, action) => {
        const {payload } = action;
        state[payload].drawerOpen = true;
    },
    closeDrawer: (state, action) => {
        const {payload } = action;
        state[payload].drawerOpen = false;
    },
    setActiveTab: (state, action) => {
      const { payload } = action;
      const { drawerId, activeTab } = payload;
      state[drawerId].activeTab = activeTab;
    },
    setInitialState: (state, action) => {
      state[action.payload] = {
        drawerOpen: false,
        activeTab: '1',
      }
    } 
  }
});

export const {
    openDrawer,
    closeDrawer,
    setActiveTab,
    setInitialState
} = drawerSlice.actions

export default drawerSlice.reducer;