import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getTodosSlice = createSelector(
    (state: RootState) => state,
    state => state.todos
)

const getTodos = createSelector(
    getTodosSlice,
    state => state.todos
)

const todosSelectors = {
    getTodos,
    getTodosSlice
}

export default todosSelectors