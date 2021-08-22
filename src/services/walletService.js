import axios from 'axios'
import { API_URL } from '../utilities/api'
import { getCredentials } from '../utilities/credentials'

class walletService {
  async topup(id, amount) {
    const { token } = getCredentials()
    return axios
      .post(
        process.env.REACT_APP_API_URL +
          `/api/ewallet/postUpdateEWallet/${id}/increase`,
        {
          amount: amount,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        return res
      })
  }
}

export default new walletService()
