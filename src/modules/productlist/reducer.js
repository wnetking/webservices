import * as t from './actionTypes';

const initState = {
    data: null,
    fetching: true,
    props: null,
    error: {
        status: false,
        message: null
    }
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case t.FETCH_REQUESTED:
            return {
                ...state,
                ...{
                    fetching: true,
                    props : action.payload
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
        default:
            return state
    }
}