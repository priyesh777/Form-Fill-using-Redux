import { call, put, takeLatest } from "redux-saga/effects";
import { getPeopleDetails } from "../API";
import {
  formConstant,
  getPeopleDetailsSuccess,
  getPeopleDetailsFailure
} from "../actions/form";

function* getPeopleDetailsRequest(payload) {
  try {
    const response = yield call(getPeopleDetails, payload);
    yield put(getPeopleDetailsSuccess(response.data));
  } catch (error) {
    yield put(getPeopleDetailsFailure());
  }
}

function* formWatcher() {
  yield takeLatest(
    formConstant.GET_PEOPLE_DETAILS_REQUEST,
    getPeopleDetailsRequest
  );
}

export default formWatcher;
