import axios from 'axios'
import crypto from 'crypto-js'
import { API_URL } from '../config/api'

class AuthService {
  async login(username, password) {
    return await axios
      .post(`${API_URL}/api/postLogin`, {
        username,
        password,
      })
      .then(response => {
        const secret = crypto.AES.encrypt(
          JSON.stringify(response.data),
          process.env.REACT_APP_ENCRYPT
        ).toString()
        localStorage.setItem('user', secret)
      })
      .catch(err => err)
  }

  async register(username, password) {
    return await axios
      .post(`${API_URL}/api/postRegister`, {
        username,
        password,
      })
      .then(response => response.data)
      .catch(err => err)
  }
}

export default new AuthService()
