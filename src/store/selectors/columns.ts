import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectColumnSlice = createSelector(
    (state: RootState) => state,
    state => state.columns
);

const selectColumns = createSelector(
    selectColumnSlice,
    (state) => state.columns
);

const columnSelectors = {
    selectColumnSlice,
    selectColumns,
};

export default columnSelectors;
