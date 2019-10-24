import { all } from 'redux-saga/effects';
import locationsSagas from './locations/saga';

export default function* rootSaga() {
  yield all([
    locationsSagas(),
  ]);
}
