import{
  FETCH_CATEGORY_DATA, CMS_DATA_REQUEST
} from '../constants/cms'

import cms from '../utils/cms/'

export function getAll(array) {
  return (dispatch) => {
    dispatch({
      type   : CMS_DATA_REQUEST,
      payload: {
        fetching: true
      }
    })

    cms.all(array).then(data => {
      dispatch({
        type   : FETCH_CMS_DATA,
        payload: {
          data    : data,
          fetching: false
        }
      })
    });
  }
}