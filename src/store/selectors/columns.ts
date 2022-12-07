import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ColumnState } from '../types/columns';

// const selectSlice = createSelector(
//     (state: RootState): ColumnState => state.columns
// );

const selectColumns = createSelector(
    (state: RootState) => state.columns,
    (state) => state.columns
);

const columnSelectors = {
    // selectSlice,
    selectColumns,
};

export default columnSelectors;
