import axios from 'axios'

// Config
const { API } = APP
const { API_ROOT } = API

const zapAPI = axios.create({
  baseURL: API_ROOT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default zapAPI
