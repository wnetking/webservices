import * as t from './actionTypes';


export const getCategoryList = () => ({
  type: t.FETCH_REQUESTED,
  payload: {
    categoryList: {
      data: null,
      fatching: true
    }
  }
});

export const categoryListSuccess = (d) => ({
  type: t.FETCH_REQUESTED_SUCCEEDED,
  payload: {
    categoryList: {
      data: d,
      fatching: false
    }
  }
});

export const categoryListFailed = (err) => ({
  type: t.FETCH_REQUESTED_FAILED,
  payload: {
    categoryList: {
      fatching: false,
      error: {
        status: true,
        message: err
      }
    }
  }
});

export const fetchOneRequest = (id) => ({
  type: t.FETCH_ONE_REQUESTED,
  payload: {
    id: id
  }
})

export const fetchOneSuccess = (d) => ({
  type: t.FETCH_ONE_SUCCEEDED,
  payload: {
    data: d,
    fetching: false
  }
})

export const fetchOneFailed = (err) => ({
  type: t.FETCH_ONE_FAILED,
  payload: {
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})

export const fetchSubCatRequest = (array) => ({
  type: t.FETCH_SUB_CAT_REQUESTED,
  payload: {
    array: array
  }
})

export const fetchSubCatSuccess = (d) => ({
  type: t.FETCH_SUB_CAT_SUCCEEDED,
  payload: {
    subCat: {
      data: d,
      fetching: false
    }
  }
})

export const fetchSubCatFailed = (err) => ({
  type: t.FETCH_SUB_CAT_FAILED,
  payload: {
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})