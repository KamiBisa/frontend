import { Box } from '@chakra-ui/react'
import DonationHeader from '../components/DonationPage/DonationHeader'
import DonationBody from '../components/DonationPage/DonationBody'

export default function DonationPage(props) {
  return (
    <Box minH="100vh">
      <DonationHeader props={props} />
      <DonationBody props={props} />
    </Box>
  )
}
