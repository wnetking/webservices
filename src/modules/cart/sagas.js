import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as t from './actionTypes'
import * as actions from './actions'
import Api from 'api'

function * addToCart (action) {
  try {
    const data = yield call(Api.cart.addProduct, action.payload.data)

    yield put(actions.addToCartSucceess(data))
  } catch (e) {
    yield put(actions.addToCartFailed(e.message))
  }
}

function * getCartId () {
  try {
    const data = yield call(Api.cart.getCartId, null)

    yield put(actions.getCartIdSucceess(data))
  } catch (e) {
    yield put(actions.getCartIdFailed(e.message))
  }
}

function * addCartItem (action) {
  try {
    const data = yield call(Api.cart.getCartItemData, action.payload.item)

    yield put(actions.addCartItemSucceess(data))    
  } catch (e) {
    yield put(actions.addCartItemFailed(e.message))
  }
}

function * saga () {
  yield takeLatest(t.ADD_TO_CART_REQUESTED, addToCart)
  yield takeLatest(t.GET_CART_ID_REQUESTED, getCartId)
  yield takeEvery(t.ADD_CART_ITEM_REQUESTED, addCartItem)
}

export default saga
