import axios from 'axios'
import { API_URL } from '../utilities/api'
import { getCredentials } from '../utilities/credentials'

class adminService {
  async getFundraiserRequests() {
    const { token } = getCredentials()
    return await axios
      .get(`${API_URL}/api/notification/view/fundraisers`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(res => res)
      .catch(err => err)
  }

  async getProgramRequests() {
    const { token } = getCredentials()
    return await axios
      .get(`${API_URL}/api/notification/view/programs`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(res => res)
      .catch(err => err)
  }

  async getWithdrawalRequests() {
    const { token } = getCredentials()
    return await axios
      .get(`${API_URL}/api/notification/view/withdrawals`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(res => res)
      .catch(err => err)
  }

  async acceptFundraiserRequest(id) {
    const { token } = getCredentials()
    return await axios
      .get(`${API_URL}/api/verification/getVerifyFundraiser/${id}/verify`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(res => res)
      .catch(err => err)
  }

  async rejectFundraiserRequest(id) {
    const { token } = getCredentials()
    return await axios
      .get(`${API_URL}/api/verification/getVerifyFundraiser/${id}/reject`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(res => res)
      .catch(err => err)
  }

  async acceptProgramRequest(id) {
    const { token } = getCredentials()
    return await axios
      .get(
        `${API_URL}/api/verification/getVerifyDonationProgram/${id}/verify`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then(res => res)
      .catch(err => err)
  }

  async rejectProgramRequest(id) {
    const { token } = getCredentials()
    return await axios
      .get(
        `${API_URL}/api/verification/getVerifyDonationProgram/${id}/reject`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then(res => res)
      .catch(err => err)
  }

  async acceptWithdrawalRequest(id) {
    const { token } = getCredentials()
    return await axios
      .get(`${API_URL}/api/verification/getVerifyWithdrawal/${id}/verify`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log(err.response.data)
        return err.response.data
      })
  }

  async rejectWithdrawalRequest(id) {
    const { token } = getCredentials()
    return await axios
      .get(`${API_URL}/api/verification/getVerifyWithdrawal/${id}/reject`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log(err.response.data)
        return err.response.data
      })
  }
}

export default new adminService()
