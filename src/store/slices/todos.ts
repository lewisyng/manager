import { createSlice } from '@reduxjs/toolkit';
import { TodoSlice } from '../types/todo';

const initialState: TodoSlice = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action) {
      const todos = action.payload || [];
      console.log('action', action);
      state.todos = [...todos];
      // state.todos = action.payload
    },
  },
});

export const { setTodos } = todosSlice.actions;

const { reducer: todosReducer } = todosSlice;

export default todosReducer;
