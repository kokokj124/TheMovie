import { all } from 'redux-saga/effects';
import pageWatcher from 'screens/page/saga';

export default function* rootSaga() {
  yield all([pageWatcher()]);
}