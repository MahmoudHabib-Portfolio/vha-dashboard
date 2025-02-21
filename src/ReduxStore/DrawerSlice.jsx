import { createSlice } from "@reduxjs/toolkit";

export const DrawerSlice = createSlice({
    name:"Open",
    initialState:{
        open: true,
    },
    reducers:{
        showDrawer: (state) => {
            state.open = true
        },
        hideDrawer: (state) => {
            state.open = false
        }
    }
});

export const {showDrawer, hideDrawer} = DrawerSlice.actions;
export default DrawerSlice.reducer;