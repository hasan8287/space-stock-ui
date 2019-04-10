import axios from 'axios'
import config from './../config'

const BASE_URL_API = config.BASE_URL_API

export const deleteData = (data) => new Promise((resolve, reject) => {
  const url = `${BASE_URL_API}${data.resource}/${data.id}`

  axios({
    url,
    method: 'delete',
  }).then((res) => {
    if (res.status === 200) resolve(res)
    throw new Error(res.message)
  }).catch(err => reject(err))
})

export const createData = (data) => new Promise((resolve, reject) => {
  const url = `${BASE_URL_API}${data.resource}`
  
  axios({
    url,
    method: 'post',
    data: data.data,
  }).then((res) => {
    if (res.status === 201) {
      resolve(res)
    }
    throw new Error(res.message)
  }).catch(err => reject(err))
})

export const getAll = (data) => new Promise((resolve, reject) => {
  let url = `${BASE_URL_API}${data.resource}`
  if (data.id) url = `${url}/${data.id}`

  if (!data.params) {
    data.params = {}
  }
  
  axios({
    url,
    method: 'get',
    params: data.params,
  }).then((res) => {
    if (res.status === 200) resolve(res.data)
    throw new Error(res.statusText)
  }).catch(err => reject(err))
})

export const updateData = (data) => new Promise((resolve, reject) => {
  const url = `${BASE_URL_API}${data.resource}/${data.id}`

  axios({
    url,
    method: 'put',
    data: data.data,
  }).then((res) => {
    if (res.status === 200) resolve(res)
    throw new Error(res.message)
  }).catch(err => {
    reject(err)
  })
})