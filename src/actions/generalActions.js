import{
  FETCH_GENERAL_DATA, GENERAL_DATA_REQUEST
} from '../constants/general'

import general from '../utils/general'


export function getActiveCurrency() {
  return (dispatch) => {
    dispatch({
      type   : GENERAL_DATA_REQUEST,
      payload: {
        currencies: {
          fetching: true
        }
      }
    })

    general.getActiveCurrency().then(d => {
      dispatch({
        type   : FETCH_GENERAL_DATA,
        payload: {
          currencies: {
            data    : d,
            fetching: false
          }
        }
      })
    })
  }
}