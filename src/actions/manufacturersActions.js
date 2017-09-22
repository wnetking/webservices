import{
  FETCH_MANUFACTURER_DATA, MANUFACTURER_DATA_REQUEST
} from '../constants/manufacturer'

import {manufacturer} from '../utils/manufacturers/'

export function getInfo(id) {
  return (dispatch) => {
    dispatch({
      type   : MANUFACTURER_DATA_REQUEST,
      payload: {
        info: {
          data    : null,
          fetching: true,
        }
      }
    })

    manufacturer.getInfo(id).then(data => {
      dispatch({
        type   : FETCH_MANUFACTURER_DATA,
        payload: {
          info: {
            data    : data.manufacturer,
            fetching: false,
          }
        }
      })
    });
  }
}

export function getOne(id) {
  return (dispatch) => {
    dispatch({
      type   : MANUFACTURER_DATA_REQUEST,
      payload: {
        page: {
          data    : null,
          fetching: true,
        }
      }
    })

    manufacturer.getInfo(id).then(data => {
      console.log(data)

      dispatch({
        type   : FETCH_MANUFACTURER_DATA,
        payload: {
          page: {
            data    : data.manufacturer,
            fetching: false
          }
        }
      })
    });
  }
}

export function reset() {
  return {
    type   : MANUFACTURER_DATA_REQUEST,
    payload: {
      fetching: true
    }
  }
}

export function getAll() {
  return (dispatch) => {
    dispatch({
      type   : MANUFACTURER_DATA_REQUEST,
      payload: {
        data    : null,
        fetching: true
      }
    })

    manufacturer.all().then(data => {
      dispatch({
        type   : FETCH_MANUFACTURER_DATA,
        payload: {
          data    : data,
          fetching: false
        }
      })
    });
  }
}