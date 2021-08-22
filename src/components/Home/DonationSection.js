import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  HStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import donationService from '../../services/donationService'
import DonationCard from '../DonationCard'

export default function DonationSection() {
  const [donations, setDonations] = useState([])
  useEffect(() => {
    donationService.getAll().then(data => {
      setDonations(data.donation_program)
    })
  }, [])
  return (
    <Stack px={{ base: 5, md: '10vw' }} py={8} bg="kamibisa.bg">
      <Text
        fontSize={{ base: 'xl', md: '3xl' }}
        fontWeight="bold"
        p={4}
        color="kamibisa.text"
      >
        Campaign Kita
      </Text>
      <HStack
        spacing={{ base: 4, md: 8 }}
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '0px',
          },
        }}
        p={4}
      >
        {donations?.map(donation => (
          <>
            <DonationCard
              title={donation.name}
              amount={donation.balance}
              goal={donation.goal}
              imageUrl={donation.image_url}
              description={donation.description}
              id={donation.program_id}
            />
          </>
        ))}
      </HStack>
    </Stack>
  )
}
