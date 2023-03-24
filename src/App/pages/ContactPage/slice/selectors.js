import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectSlice = state => state?.contactPage || initialState;

export const selectContactPage = createSelector([selectSlice], state => state);

export const selectMessage = createSelector(
  [selectSlice],
  contactPageState => contactPageState.message,
);

export const selectLoading = createSelector(
  [selectSlice],
  contactPageState => contactPageState.loading,
);

export const selectEmail = createSelector(
  [selectSlice],
  contactPageState => contactPageState.email,
);
