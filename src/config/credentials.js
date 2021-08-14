import crypto from 'crypto-js'

export const getCredentials = () => {
  const secret = process.env.REACT_APP_ENCRYPT
  const str = localStorage.getItem('user') ? localStorage.getItem('user') : null
  const data = str !== null ? crypto.AES.decrypt(str, secret) : null
  return data !== null ? JSON.parse(data.toString(crypto.enc.Utf8)) : null
}
