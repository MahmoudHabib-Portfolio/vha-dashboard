import { configureStore } from "@reduxjs/toolkit";
import DrawerSlice from "./DrawerSlice";

export const Store = configureStore({
    reducer:{
        Open: DrawerSlice
    }
});