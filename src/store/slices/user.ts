import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types/user";

const initialState: UserState = {
    user: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

export const {setUser} = userSlice.actions

const {reducer: userReducer} = userSlice;

export default userReducer