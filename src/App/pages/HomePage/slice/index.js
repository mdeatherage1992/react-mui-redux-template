import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { homePageSaga } from './saga';

export const initialState = {
  loading: true,
  details: {},
};

const slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    getHomePageInfo(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      // adding ID for dummy data for data grid
      state.details = action.payload.map((g, i) => {
        return {
          country: g.country,
          name: g.name,
          domains: g.domains[0],
          web_pages: g.web_pages[0],
          id: i + 1,
        };
      });
      state.loading = false;
    },
    fetchFail(state, action) {
      state.loading = false;
    },
  },
});

export const { actions: homePageActions } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homePageSaga });
  return { actions: slice.actions };
};
