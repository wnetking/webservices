import{
  FETCH_CONTACTS_DATA, CMS_CONTACTS_REQUEST
} from '../constants/contacts'


import contacts from '../utils/contacts/'

export function getAll(array) {
  return (dispatch) => {
    dispatch({
      type   : CMS_CONTACTS_REQUEST,
      payload: {
        fetching: true
      }
    })

    contacts.all(array).then(data => {
      dispatch({
        type   : FETCH_CONTACTS_DATA,
        payload: {
          data    : data,
          fetching: false
        }
      })
    });
  }
}