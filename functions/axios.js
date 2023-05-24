const axios = require('axios')

const IS_PROD = true

const prodBaseUrl = 'https://cleverprogrammerbackend.vercel.app/api/cli'
const localBaseUrl = 'http://localhost:3000/api/cli'

const cpBackend = axios.create({
  baseURL: IS_PROD ? prodBaseUrl : localBaseUrl,
})

module.exports = {
  cpBackend,
}
