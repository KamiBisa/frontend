import axios from 'axios'
import crypto from 'crypto-js'
import { API_URL } from '../utilities/api'
import { getCredentials } from '../utilities/credentials'

class AuthService {
  async login(username, password) {
    return await axios
      .post(`${API_URL}/api/authentication/postLogin`, {
        username: username,
        password: password,
      })
      .then(response => {
        const secret = crypto.AES.encrypt(
          JSON.stringify(response.data),
          process.env.REACT_APP_ENCRYPT
        ).toString()
        localStorage.setItem('user', secret)
        return response.data
      })
      .catch(err => err)
  }

  async register(fullName, username, email, password, choose) {
    const res = await axios
      .post(`${API_URL}/api/authentication/postRegister`, {
        fullname: fullName,
        username: username,
        email: email,
        password: password,
        role: choose === 'Donor' ? 'donor' : 'fundraiser',
        avatar: 'https://image.flaticon.com/icons/png/512/21/21104.png',
      })
      .then(response => response.data)
      .catch(err => err.data)
    return res
  }

  async getProfile() {
    const { token } = getCredentials()
    return axios
      .get(process.env.REACT_APP_API_URL + '/api/authentication/getUserInfo', {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(res => res.data)
  }

  async logout() {
    localStorage.removeItem('user')
    return true
  }
}

export default new AuthService()
