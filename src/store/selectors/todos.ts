import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const getTodosSlice = createSelector(
    (state: RootState) => state,
    (state) => state.todos
);

const getTodos = createSelector(getTodosSlice, (state) => state.todos);

const getTodosFromColumn = createSelector(
    getTodosSlice,
    (state: RootState, columnId: string) => columnId,
    (state, columnId) => {
        return state.todos.filter(
            (todo) => String(todo.column) === String(columnId)
        );
    }
);

const todosSelectors = {
    getTodos,
    getTodosFromColumn,
    getTodosSlice,
};

export default todosSelectors;
