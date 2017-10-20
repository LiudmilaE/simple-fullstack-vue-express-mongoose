import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/api/users',
})

export function getAllUsers () {
  return service.get('/').then(response => {
    return response.data
  })
}
