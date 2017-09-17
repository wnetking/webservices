import{
  FETCH_COMBINATION_DATA, COMBINATION_DATA_REQUEST
} from '../constants/combinations'

import {combinations} from '../utils/combinations/'

export function getAll(array) {
  return (dispatch) => {
    dispatch({
      type   : COMBINATION_DATA_REQUEST,
      payload: {
        fetching: true
      }
    })

    combinations.getAll(array).then(data => {
      dispatch({
        type   : FETCH_COMBINATION_DATA,
        payload: {
          data    : data,
          fetching: false
        }
      })
    });
  }
}