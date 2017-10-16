import{
  CMS_IMAGE_SLIDER_REQUEST, FETCH_IMAGE_SLIDER_DATA
} from '../constants/imageslider'

import imageslider from '../api/imageslider/'

export function getAll() {
  return (dispatch) => {
    dispatch({
      type   : CMS_IMAGE_SLIDER_REQUEST,
      payload: {
        fetching: true
      }
    })

    imageslider.all().then(data => {
      dispatch({
        type   : FETCH_IMAGE_SLIDER_DATA,
        payload: {
          data    : data,
          fetching: false
        }
      })
    });
  }
}