import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Columns, ColumnState } from '../types/columns';

const initialState: ColumnState= {
    columns: [],
};

const columnsSlice = createSlice({
    name: 'columns',
    initialState,
    reducers: {
        addColumn(state, action) {},
        overwriteColumns(state, action: PayloadAction<Columns>) {
            state.columns = action.payload;
        },
        setColumns(state, action) {
            state.columns = action.payload
        }
    },
});

export const { addColumn, setColumns } = columnsSlice.actions;

const {reducer: columnsReducer} = columnsSlice

export default columnsReducer;
