import * as t from './actionTypes';

const initState = {
    data: null,
    fetching: true,
    error: {
        status: false,
        message: null
    },
    manufacturerPage: {
        data: null,
        fetching: true,
        error: {
            status: false,
            message: null
        }
    }
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case t.FETCH_REQUESTED:
            return {
                ...state,
                ...{
                    fetching: true
                }
            }
        case t.FETCH_REQUESTED_SUCCEEDED:
            return {
                ...state,
                ...action.payload
            }
        case t.FETCH_REQUESTED_FAILED:
            return {
                ...state,
                ...action.payload
            }
        case t.FETCH_ONE_REQUESTED:
            return {
                ...state,
                ...{
                    manufacturerPage: {
                        data: null,
                        fetching: true
                    }
                }
            }
        case t.FETCH_ONE_SUCCEEDED:
            return {
                ...state,
                ...action.payload
            }
        case t.FETCH_ONE_FAILED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}