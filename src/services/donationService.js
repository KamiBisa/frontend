import axios from 'axios'
import crypto from 'crypto-js'
import { API_URL } from '../utilities/api'
import { getCredentials } from '../utilities/credentials'

class donationService {
  async getAll() {
    return await axios
      .get(`${API_URL}/api/donation_program/getVerifiedDonationProgram`)
      .then(res => res.data)
      .catch(err => err)
  }

  async getOne(id) {
    return await axios
      .get(`${API_URL}/api/donation_program/getDonationProgramInfo/${id}`)
      .then(res => res.data)
      .catch(err => err)
  }

  async donate(id, amount) {
    const { token } = getCredentials()
    return axios
      .post(
        process.env.REACT_APP_API_URL + `/api/donation/postDonate/${id}`,
        {
          amount: amount,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err => err.response.data)
  }

  async create(name, description, goal, image) {
    const { token } = getCredentials()
    return axios
      .post(
        process.env.REACT_APP_API_URL +
          `/api/donation_program/postCreateDonationProgram`,
        {
          name: name,
          description: description,
          goal: goal,
          image: image,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err => err.response.data)
  }

  async getOwnCampaign() {
    const { token } = getCredentials()
    return axios
      .get(
        process.env.REACT_APP_API_URL +
          `/api/donation_program/getOwnDonationProgramList`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        console.log(res)
        return res.data
      })
      .catch(err => err.response.data)
  }

  async requestWithdrawal(id) {
    const { token } = getCredentials()
    return axios
      .post(
        process.env.REACT_APP_API_URL +
          `/api/withdrawal/postWithdrawDonationProgram/${id}`,
        {
          amount: 100000,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        console.log(res.data)
        return res
      })
      .catch(err => {
        console.log(err.response.data)
        return err.response.data
      })
  }
}

export default new donationService()
