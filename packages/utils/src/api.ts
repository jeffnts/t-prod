import axios from "axios"

const baseURL = "http://localhost:3333"

const api = axios.create({
  baseURL,
  timeout: 60000,
})

export default api
