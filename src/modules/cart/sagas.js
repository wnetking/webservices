import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes';
import * as actions from './actions'
import Api from 'api'

function* addToCart(action) {
  try {
    const data = yield call(Api.cart.addProduct,action.payload.data);
    
    // yield put(actions.addToCartSucceess(data));
    console.log(data);
  } catch (e) {
    console.log(e)
    // yield put(actions.addToCartFailed(e.message));
  }
}

function* saga() {
  yield takeLatest(t.ADD_TO_CART_REQUESTED, addToCart);
}

export default saga;