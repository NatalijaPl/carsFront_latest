import { call, put, all, fork, takeEvery, take } from "redux-saga/effects";
import { carService } from "../../services/CarService";
import { todoService } from "../../services/TodoService";
import { setAllUsers } from "../cars/slice";

function* getUsers() {
  try {
    const response = yield call(carService.getAll);
    yield put(setAllUsers(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* getUsersSagaWatcher() {
  yield takeEvery("user/getAllSagas", getUsers);
}
export default function* rootUserSaga() {
  yield all([fork(getUsersSagaWatcher)]);
}
