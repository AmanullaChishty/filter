import { createSelector } from 'reselect';

export const getSearchData = createSelector(
    state => state.searchReducer.works,
    works => works
)