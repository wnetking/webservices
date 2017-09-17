import{
  FETCH_CATEGORY_DATA, CATEGORY_DATA_REQUEST
} from '../constants/category'

import {category} from '../utils/category/'

export function getAll(array) {
  return (dispatch) => {
    dispatch({
      type   : CATEGORY_DATA_REQUEST,
      payload: {
        fetching: true
      }
    })

    category.all(array).then(data => {
      dispatch({
        type   : FETCH_CATEGORY_DATA,
        payload: {
          data    : data,
          fetching: false
        }
      })
    });
  }
}