import{
  FETCH_COMBINATION_DATA, COMBINATION_DATA_REQUEST
} from '../constants/combinations'

import {combinations} from '../utils/combinations/'


export function getCombinationData(id) {
  return (dispatch) => {
    dispatch({
      type   : COMBINATION_DATA_REQUEST,
      payload: {
        fetching: true
      }
    })

    combinations.getCombination(id).then(data => {
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

export function getOptionValues(array) {
  return (dispatch) => {
    dispatch({
      type   : COMBINATION_DATA_REQUEST,
      payload: {
        optionValues: {
          data    : null,
          fetching: true
        }
      }
    })

    combinations.getOptionValues(array).then(data => {
      dispatch({
        type   : FETCH_COMBINATION_DATA,
        payload: {
          optionValues: {
            data    : data,
            fetching: false
          }
        }
      })
    });
  }
}

export function getAllCombinations(array) {
  return (dispatch) => {
    dispatch({
      type   : COMBINATION_DATA_REQUEST,
      payload: {
        allCombinations: {
          data    : null,
          fetching: true
        }
      }
    })

    combinations.getAll(array).then(data => {
      dispatch({
        type   : FETCH_COMBINATION_DATA,
        payload: {
          allCombinations: {
            data    : data,
            fetching: false
          }
        }
      })
    });
  }
}