import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { FETCH_REQUEST, FETCH_RESPONSE, FETCH_SAGA } from "./actionsType";

export function* fetchListDataSaga(action) {
    // debugger;
    let apiUrl = "https://reqres.in/api/users"
    try {
        yield put({ type: FETCH_REQUEST })
        const payload = yield call(axios.get, apiUrl);
        yield put({ type: FETCH_RESPONSE, payload })
    }
    catch (error) {
        yield put({ type: FETCH_RESPONSE, payload: error })
    }
}

export function* fetchData() {
    yield takeLatest(FETCH_SAGA, fetchListDataSaga)
}