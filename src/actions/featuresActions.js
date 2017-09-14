import{
  FETCH_FEATURES_DATA, FEATURES_DATA_REQUEST
} from '../constants/features'

import {features} from '../utils/features/'

export function getAll(array) {
  return (dispatch) => {
    dispatch({
      type   : FEATURES_DATA_REQUEST,
      payload: {
        fetching: true
      }
    })

    features.getAll(array).then(data => {
      dispatch({
        type   : FETCH_FEATURES_DATA,
        payload: {
          data    : data,
          fetching: false
        }
      })
    });
  }
}