import axios from 'axios'
import crypto from 'crypto-js'
import { API_URL } from '../config/api'

class AuthService {
  async login(email, password) {
    return await axios
      .post(`${API_URL}/auth/login`, {
        email,
        password,
      })
      .then(response => response.data)
      .catch(err => err)
  }

  async register(email, password) {
    return await axios
      .post(`${API_URL}/auth/register`, {
        email,
        password,
      })
      .then(response => response.data)
      .catch(err => err)
  }
}

export default new AuthService()
