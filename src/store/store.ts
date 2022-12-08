import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import columnsReducer from './slices/columns';
import generalReducer from './slices/general';
import { columnsApi } from './api/columnsApi';
import { todosApi } from './api/todosApi';
import todosReducer from './slices/todos';
import userReducer from './slices/user';
import { userApi } from './api/userApi';

const store = configureStore({
    reducer: {
        columns: columnsReducer,
        general: generalReducer,
        todos: todosReducer,
        user: userReducer,
        [columnsApi.reducerPath]: columnsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([columnsApi.middleware, todosApi.middleware, userApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
