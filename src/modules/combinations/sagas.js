import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes'
import * as actions from './actions'
import Api from 'api'

function* fetchCombinations(action) {
  try {
    const data = yield call(Api.combinations.getCombination, action.payload.id);

    yield put(actions.fetchCombinationSuccess(data))
  } catch (e) {
    yield put(actions.fetchCombinationFailed(e.message))
  }
}

function* fetchProduct(action) {
  try {
    const data = yield call(Api.products.one, action.payload.id);
    const all = yield call(Api.combinations.getAll, data.associations.combinations)
    const options = yield call(Api.combinations.getOptionValues, data.associations.product_option_values);
    const comb = yield call(Api.combinations.getCombination, data.id_default_combination);

    yield put(actions.fetchProductSuccess(data))
    yield put(actions.fetchAllSuccess(all))
    yield put(actions.fetchOptionSuccess(options))
    yield put(actions.fetchCombinationSuccess(comb))
  } catch (e) {
    yield put(actions.fetchProductFailed(e.message))
  }
}
function* saga() {
  yield takeLatest(t.FETCH_PRODUCT_REQUESTED, fetchProduct)
  yield takeLatest(t.FETCH_COMBINATION_REQUESTED, fetchCombinations)
}

export default saga
