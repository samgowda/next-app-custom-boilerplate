import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import actions from './actions';

// Services
import { fetchLocations } from '../../services/locations.service';

export function* fetchLocationsSaga() {
  try {
    const response = yield call(fetchLocations);

    console.log(response);

    yield put({ type: actions.LOCATIONS_SUCCESS, list: response.data, meta: response.meta });
  } catch (error) {
    yield put({ type: actions.LOCATIONS_FAIL });
  }
}

export default function* rootSaga() {
  yield takeLatest(actions.FETCH_LOCATIONS, fetchLocationsSaga);
}
