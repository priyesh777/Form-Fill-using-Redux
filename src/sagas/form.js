import { call, put, takeLatest } from "redux-saga/effects";
import { getPeopleDetails, postPeopleDetails } from "../API";
import {
  formConstant,
  getPeopleDetailsSuccess,
  getPeopleDetailsFailure,
  postPeopleDetailsSuccess,
  postPeopleDetailsFailure
} from "../actions/form";

function* getPeopleDetailsRequest(payload) {
  try {
    const response = yield call(getPeopleDetails, payload);
    yield put(getPeopleDetailsSuccess(response.data));
  } catch (error) {
    yield put(getPeopleDetailsFailure());
  }
}

function* postPeopleDetailsRequest(payload) {
  try {
    const response = yield call(postPeopleDetails, payload);
    yield put(postPeopleDetailsSuccess(response.data));
  } catch (error) {
    yield put(postPeopleDetailsFailure());
  }
}

function* formWatcher() {
  yield takeLatest(
    formConstant.GET_PEOPLE_DETAILS_REQUEST,
    getPeopleDetailsRequest
  );
  yield takeLatest(
    formConstant.POST_PEOPLE_DETAILS_REQUEST,
    postPeopleDetailsRequest
  );
}

export default formWatcher;
