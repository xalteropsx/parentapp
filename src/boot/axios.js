import { boot } from 'quasar/wrappers'
import axios from 'axios'


const API_VERSION_PREFIX = '/api/';
const api = axios.create({ baseURL: 'https://fastapi-1-x3373285.deta.app/' })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})
// const tokenx = localStorage.getItem('token');
// console.log(tokenx)
const setToken = (token) => api.defaults.headers.common.Authorization = `Bearer ${token}`
const deleteToken = () => delete api.defaults.headers.common['Authorization']

export { api, setToken, deleteToken, API_VERSION_PREFIX }
