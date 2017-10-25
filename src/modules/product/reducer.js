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
    },
    accessories: {
        data: null,
        fetching: true,
    },
    bundle: {
        data: null,
        fetching: true,
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
        
        case t.FETCH_ACCESSORIES_REQUESTED:
            return {
                ...state,
                ...{
                    accessories: {
                        data: null,
                        fetching: true,
                    }
                }
            }
        case t.FETCH_ACCESSORIES_REQUESTED_SUCCEEDED:
            return {
                ...state,
                ...action.payload
            }
        case t.FETCH_ACCESSORIES_REQUESTED_FAILED:
            return {
                ...state,
                ...action.payload
            }


        case t.FETCH_BUNDLE_REQUESTED:
            return {
                ...state,
                ...{
                    bundle: {
                        data: null,
                        fetching: true
                    }
                }
            }
        case t.FETCH_BUNDLE_REQUESTED_SUCCEEDED:
            return {
                ...state,
                ...action.payload
            }
        case t.FETCH_BUNDLE_REQUESTED_FAILED:
            return {
                ...state,
                ...action.payload
            }    
        default:
            return state
    }
}