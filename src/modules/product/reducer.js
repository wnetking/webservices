import * as t from './actionTypes';

const initState = {
    data: null,
    fetching: true,
    props: null,
    error: {
        status: false,
        message: null
    },
    features:{
      data: null,
      fetching: true,
      error: {
        status: false,
        message: null
    },
    }
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case t.FETCH_FEATURES_REQUESTED:
            return {
                ...state,
                ...{
                  features: {
                    fetching: true,
                    data : null
                  },
                  error: {
                    status: false,
                    message: null
                  }
                }
            }
        case t.FETCH_FEATURES_REQUESTED_SUCCEEDED:
            return {
                ...state,
                ...action.payload
            }
        case t.FETCH_FEATURES_REQUESTED_FAILED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}