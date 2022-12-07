import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import columnsReducer from './slices/columns';
import generalReducer from './slices/general';
import { columnsApi } from './api/columnsApi';
import listenerMiddleware from './listenerMiddleware';

const store = configureStore({
    reducer: {
        columns: columnsReducer,
        general: generalReducer,
        [columnsApi.reducerPath]: columnsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            columnsApi.middleware,
            listenerMiddleware.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
