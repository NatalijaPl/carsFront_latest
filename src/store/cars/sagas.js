import { call, put, all, fork, takeEvery, take } from "redux-saga/effects";
import { carService } from "../../services/CarService";
import { setAllCars } from "../cars/slice";

function* getCars() {
  try {
    const response = yield call(carService.getAll);
    yield put(setAllCars(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* getCarsSagaWatcher() {
  yield takeEvery("user/getAllSagas", getCars);
}
export default function* rootCarsSaga() {
  yield all([fork(getCarsSagaWatcher)]);
}
