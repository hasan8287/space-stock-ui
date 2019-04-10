
import {
    DATA_BUILDINGS,
    DATA_BUILDINGS_REQUEST,
    DATA_BUILDINGS_DETAIL,
    DATA_BUILDINGS_FAILED,
    DATA_BUILDINGS_SUCCESS,
  } from './action'
  
  const initialState = {
    data: {
      docs: [],
      limit: 10,
      page: 1,
    },
    isLoading: false,
    err: null,
    detail: {},
    succes: false,
  }
  
export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_BUILDINGS_REQUEST:
      return {
        ...state,
        isLoading: true,
        succes: false,
        err: null,
      }

    case DATA_BUILDINGS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }

    case DATA_BUILDINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        succes: true,
      }

    case DATA_BUILDINGS_DETAIL:
      return {
        ...state,
        isLoading: false,
        detail: action.detail
      }

    case DATA_BUILDINGS_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.err
      }

    default:
      return state
  }
}
  