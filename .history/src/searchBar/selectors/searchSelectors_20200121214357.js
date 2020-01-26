import { createSelector } from 'reselect';

export const getSearchData = createSelector(
    state => state.reducer.works,
    works => works
)