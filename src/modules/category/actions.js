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
    categoryList:{
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