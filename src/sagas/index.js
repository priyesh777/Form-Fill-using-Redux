import { all } from 'redux-saga/effects';
import formWatcher from './form';

function* rootSaga() {
  yield all([formWatcher()]);
}

export default rootSaga;
