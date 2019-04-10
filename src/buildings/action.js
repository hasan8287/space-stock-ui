import { getAll, updateData, createData, deleteData } from '../api'

export const DATA_BUILDINGS_REQUEST = 'DATA_BUILDINGS_REQUEST'
export const DATA_BUILDINGS = 'DATA_BUILDINGS'
export const DATA_BUILDINGS_FAILED = 'DATA_BUILDINGS_FAILED'
export const DATA_BUILDINGS_DETAIL = 'DATA_BUILDINGS_DETAIL'
export const DATA_BUILDINGS_SUCCESS = 'DATA_BUILDINGS_SUCCESS'

const resource = 'buildings'

export const deleteDataBuildings = (id) => dispatch => {
  dispatch({ type: DATA_BUILDINGS_REQUEST })

  deleteData({ resource, id })
    .then(() => dispatch({
      type: DATA_BUILDINGS_SUCCESS,
    }))
    .catch(err => dispatch({
      type: DATA_BUILDINGS_FAILED,
      err: err.message,
    }))
}

export const createDataBuildings = (data) => dispatch => {
  dispatch({ type: DATA_BUILDINGS_REQUEST })

  data.Content = data.Content.toString()
  createData({ resource, data })
    .then(() => dispatch({
      type: DATA_BUILDINGS_SUCCESS,
    }))
    .catch(err => dispatch({
      type: DATA_BUILDINGS_FAILED,
      err: err.message,
    }))
}

export const updateDataBuildings = (data = {}, id) => dispatch => {
  if (data.CategoryName) delete data.CategoryName
  data.Content = data.Content.toString()
  dispatch({ type: DATA_BUILDINGS_REQUEST })

  updateData({ resource, id, data })
    .then(() => dispatch({
      type: DATA_BUILDINGS_SUCCESS,
    }))
    .catch(err => dispatch({
      type: DATA_BUILDINGS_FAILED,
      err: err.message,
    }))
}

export const getDataBuildingsDetail = (id) => dispatch => {
  dispatch({ type: DATA_BUILDINGS_REQUEST })

  getAll({ resource, id })
    .then(res => dispatch({
      type: DATA_BUILDINGS_DETAIL,
      detail: res.data,
    }))
    .catch(err => dispatch({
      type: DATA_BUILDINGS_FAILED,
      err: err.message,
    }))
}

export const getDataBuildings = (params) => dispatch => {

  dispatch({ type: DATA_BUILDINGS_REQUEST })

  return getAll({ resource, params })
    .then((res) => {
      dispatch({
        type: DATA_BUILDINGS,
        data: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: DATA_BUILDINGS_FAILED,
        err: err.message,
      })
    })
}
