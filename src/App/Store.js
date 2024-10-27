import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../App/Slices/UserSlice'

//main react-redux store
export const Store = configureStore({
    reducer: {
        user: UserReducer,

    }
})
