import {
  FETCH_CATEGORY_DATA, CATEGORY_DATA_REQUEST
} from '../constants/category'

import {category} from '../utils/category/'

export function getCategoryData(id) {
  return (dispatch) => {
    dispatch({
      type   : CATEGORY_DATA_REQUEST,
      payload: {
        fetching: true
      }
    })

    category.getInfo(id).then(data => {
      dispatch({
        type   : FETCH_CATEGORY_DATA,
        payload: {
          data    : data.category,
          fetching: false
        }
      })
    });
  }
}

export function getCategoryList() {
  return (dispatch) => {
    dispatch({
      type   : CATEGORY_DATA_REQUEST,
      payload: {
        categoryList: {
          fetching: true
        }
      }
    })
    category.getCategoryList().then(d => {
      dispatch({
        type   : FETCH_CATEGORY_DATA,
        payload: {
          categoryList: {
            data    : d,
            fetching: false
          }
        }
      })
    })
  }
}