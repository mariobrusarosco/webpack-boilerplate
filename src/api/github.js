import axios from 'axios'

// Config
const { API, TOKENS } = APP
const { GITHUB } = API
const { GITHUB_TOKEN } = TOKENS

const defaultAPI = axios.create({
  baseURL: GITHUB,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `token ${GITHUB_TOKEN}`
  }
})

export default defaultAPI
