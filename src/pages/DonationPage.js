import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import DonationHeader from '../components/DonationPage/DonationHeader'
import DonationBody from '../components/DonationPage/DonationBody'
import donationService from '../services/donationService'

export default function DonationPage() {
  const { id } = useParams()
  const [props, setProps] = useState({})

  useEffect(() => {
    donationService.getOne(id).then(data => setProps(data.donation_program))
  }, [])

  return (
    <Box minH="100vh">
      <DonationHeader props={props} />
      <DonationBody props={props} />
    </Box>
  )
}
