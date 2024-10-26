// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
    },
    reducers: {
        setUser(state, action) {
            state.userData = action.payload;
        },
        clearUser(state) {
            state.userData = null;
        },
    },
});

export const { setUser, clearUser } = UserSlice.actions;
export default UserSlice.reducer;