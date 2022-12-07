import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        loadPage(state, action) {},
    },
});

export const { loadPage } = generalSlice.actions;

export default generalSlice.reducer;
