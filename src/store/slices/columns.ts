import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Columns, ColumnState } from '../types/columns';

const initialState: ColumnState = {
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
    },
});

const { addColumn } = columnsSlice.actions;

export default columnsSlice.reducer;
