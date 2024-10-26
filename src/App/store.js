import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../App/Slices/UserSlice'

//main react-redux store
export const store = configureStore({
    reducer: {
        user: UserReducer,

    }
})
