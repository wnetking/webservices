import{
  FETCH_CMS_DATA, CMS_DATA_REQUEST
} from '../constants/cms'

import cms from '../api/cms/'

export function getCmsData(id) {
  return (dispatch) => {
    dispatch({
      type   : CMS_DATA_REQUEST,
      payload: {
        fetching: true
      }
    })

    cms.getCmsData(id).then(data => {
      dispatch({
        type   : FETCH_CMS_DATA,
        payload: {
          data    : data.content,
          fetching: false
        }
      })
    });
  }
}

export function getCmsList() {
  return (dispatch) => {
    dispatch({
      type   : CMS_DATA_REQUEST,
      payload: {
        cmsLinks: {
          fetching: true
        }
      }
    })
    cms.getCmsList().then(d => {
      dispatch({
        type   : FETCH_CMS_DATA,
        payload: {
          cmsLinks: {
            data    : d,
            fetching: false
          }
        }
      })
    })
  }
}