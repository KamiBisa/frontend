const toCurrency = amount => {
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })

  return formatter.format(amount).toString().slice(0, -3)
}

export default toCurrency
