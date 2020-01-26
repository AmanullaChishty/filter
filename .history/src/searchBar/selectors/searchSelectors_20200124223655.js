import { createSelector } from 'reselect';

export const getSearchData = createSelector(
    state => state.searchReducer.serachedValue,
    serachedValue => serachedValue
)

export const getData = createSelector(
    state => state.searchReducer.contents,
    contents=>contents
)