import { createSelector } from 'reselect';

export const getSearchData = createSelector(
    state => state.searchReducer.works,
    works => works
)

export const getData = createSelector(
    state => state.searchReducer.contents,
    contents=>contents
)