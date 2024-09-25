import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comments: {
    parentDrawerOpen: false,
    childDrawerOpen: false,
  },
  details: {
    parentDrawerOpen: false,
    childDrawerOpen: false,
  },
  combined: {
    parentDrawerOpen: false,
    childDrawerOpen: false,
  },
  ttc: {
    parentDrawerOpen: false,
    childDrawerOpen: false,
  }

}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openParentDrawer: (state, action) => {
        const {payload } = action;
        console.log(payload);
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
    }
  }
});

export const {
    openParentDrawer,
    closeParentDrawer,
    openChildDrawer,
    closeChildDrawer 
} = drawerSlice.actions

export default drawerSlice.reducer;