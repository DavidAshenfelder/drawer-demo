import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openParentDrawer: (state, action) => {
        const {payload } = action;
        state[payload].parentDrawerOpen = true;
    },
    closeParentDrawer: (state, action) => {
        const {payload } = action;
        state[payload].parentDrawerOpen = false;
    },
    openChildDrawer: (state, action) => {
        const {payload } = action;
        state[payload].childDrawerOpen = true;
    },
    closeChildDrawer: (state, action) => {
        const {payload } = action;
        state[payload].childDrawerOpen = false;
    },
    setActiveTab: (state, action) => {
      const { payload } = action;
      const { drawerId, activeTab } = payload;
      state[drawerId].activeTab = activeTab;
    },
    setInitialState: (state, action) => {
      state[action.payload] = {
        parentDrawerOpen: false,
        childDrawerOpen: false,
        activeTab: '1',
      }
    } 
  }
});

export const {
    openParentDrawer,
    closeParentDrawer,
    openChildDrawer,
    closeChildDrawer,
    setActiveTab,
    setInitialState
} = drawerSlice.actions

export default drawerSlice.reducer;