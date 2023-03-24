import { ApiClient } from '../../../api';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { contactPageActions as actions } from '.';
import { selectMessage, selectEmail } from './selectors';

function* submitForm() {
  const message = yield select(selectMessage);
  const email = yield select(selectEmail);
  try {
    const response = yield call(
      ApiClient.submitForm({ message: message, email: email }),
    );
    yield put(actions.fetchSuccess(response));
  } catch (e) {
    yield put(actions.fetchFail(e));
  }
}

export function* contactPageSaga() {
  yield takeLatest(actions.submitForm.type, submitForm);
}
