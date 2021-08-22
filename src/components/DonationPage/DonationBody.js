import { Divider, Heading, Stack, Text } from '@chakra-ui/react'
import moment from 'moment'
import 'moment/locale/id'
import { useEffect, useState } from 'react'

import toCurrency from '../../utilities/toCurrency'

export default function DonationBody({ props }) {
  moment.locale('id')
  const [donations, setDonations] = useState([])
  useEffect(() => {
    setDonations(props.donatedUser?.reverse())
  }, [props.donatedUser])

  return (
    <Stack isInline justifyContent="space-between" px={{ base: 10, md: '5vw' }}>
      <Stack bg="white" spacing={4} py={10} w="70%">
        <Heading>Description</Heading>
        <Text>{props.description}</Text>
      </Stack>
      <Stack bg="white" spacing={4} py={10} w="30%">
        <Heading>Donation History</Heading>
        <Text>
          {donations?.map(donated => (
            <Stack isInline justifyContent="space-between">
              <Text>{toCurrency(donated.amount)}</Text>
              <Text>{moment(donated.timestamp).fromNow()}</Text>
            </Stack>
          ))}
          {donations?.length < 1 && <Text>Belum ada donasi.</Text>}
        </Text>
      </Stack>
    </Stack>
  )
}
