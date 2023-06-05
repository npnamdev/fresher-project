import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: {
        fullName: "",
        email: "",
        phone: "",
        avatar: "",
        role: "",
        id: "",
    },
};

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        doLoginAction: (state, action) => {
            state.value += 1;
            state.isAuthenticated = true;
            state.user = action.payload;
        },

        doGetAccountAction: (state, action) => {
            state.value += 1;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
    },
});


export const { doLoginAction, doGetAccountAction } = accountSlice.actions;
export default accountSlice.reducer;
