import * as t from './actionTypes'

export const fetchFeaturesRequest = (array) => ({
  type: t.FETCH_FEATURES_REQUESTED,
  payload: {
    array: array
  }
})

export const featureSsuccess = (d) => ({
  type: t.FETCH_FEATURES_REQUESTED_SUCCEEDED,
  payload: {
    features: {
      data: d,
      fetching: false,
      error: {
        status: false,
        message: null
      }
    }
  }
})

export const featuresFailed = (err) => ({
  type: t.FETCH_FEATURES_REQUESTED_FAILED,
  payload: {
    features: {
      fetching: false,
      error: {
        status: true,
        message: err
      }
    }

  }
})