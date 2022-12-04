import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import columnsReducer from './slices/columns';

const store = configureStore({
    reducer: {
        columns: columnsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
