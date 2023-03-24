import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectSlice = state => state?.homePage || initialState;

export const selectHomePage = createSelector([selectSlice], state => state);

export const selectDetails = createSelector(
  [selectSlice],
  homePageState => homePageState.details,
);

export const selectLoading = createSelector(
  [selectSlice],
  homePageState => homePageState.loading,
);
