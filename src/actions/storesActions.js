import{
  FETCH_STORES_DATA, CMS_STORES_REQUEST
} from '../constants/stores'


import stores from '../utils/stores/'

export function getAll() {
  return (dispatch) => {
    dispatch({
      type   : CMS_STORES_REQUEST,
      payload: {
        fetching: true
      }
    })

    stores.getAllStores().then(data => {
      dispatch({
        type   : FETCH_STORES_DATA,
        payload: {
          data    : data,
          fetching: false
        }
      })
    });
  }
}