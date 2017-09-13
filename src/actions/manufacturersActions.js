import{
  FETCH_MANUFACTURER_DATA, MANUFACTURER_DATA_REQUEST
} from '../constants/manufacturer'

import {manufacturer} from '../utils/manufacturers/'

export function getInfo(id) {
  return (dispatch) => {
    dispatch({
      type   : MANUFACTURER_DATA_REQUEST,
      payload: {
        fetching: true
      }
    })

    manufacturer.getInfo(id).then(data => {
      dispatch({
        type   : FETCH_MANUFACTURER_DATA,
        payload: {
          data    : data.manufacturer,
          fetching: false
        }
      })
    });
  }
}