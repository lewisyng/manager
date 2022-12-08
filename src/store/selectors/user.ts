import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectUserSlice = createSelector(
    (state: RootState) => state,
    state => state.user
)

const selectUser = createSelector(
    selectUserSlice,
    state => state.user
)

const userSelectors = {
    selectUser,
    selectUserSlice
}

export default userSelectors;