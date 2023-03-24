import { ApiClient } from '../../../api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { homePageActions as actions } from '.';

function* getHomePageInfo() {
  try {
    const response = yield call(ApiClient.getNews, { country: 'name' });
    yield put(actions.fetchSuccess(response));
  } catch (e) {
    yield put(actions.fetchFail(e));
  }
}

export function* homePageSaga() {
  yield takeLatest(actions.getHomePageInfo.type, getHomePageInfo);
}
