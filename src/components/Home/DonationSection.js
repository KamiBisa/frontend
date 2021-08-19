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
import DonationCard from '../DonationCard'

export default function DonationSection() {
  return (
    <Stack px={{ base: 5, md: '10vw' }} py={10} bg="#f0f0f0">
      <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight="bold" p={4}>
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
        <DonationCard
          title="Saling membantu untuk indonesia sehat"
          fundraiserName="KamiBisa"
          donaturCount={21}
          amount={1700000}
          goal={10000000}
          imageUrl="https://redaksiindonesia.com/wp-content/uploads/2020/01/Donasi.jpg"
        />
        <DonationCard
          title="Saling membantu untuk indonesia sehat"
          fundraiserName="KamiBisa"
          donaturCount={21}
          amount={1700000}
          goal={10000000}
          imageUrl="https://redaksiindonesia.com/wp-content/uploads/2020/01/Donasi.jpg"
        />
        <DonationCard
          title="Saling membantu untuk indonesia sehat"
          fundraiserName="KamiBisa"
          donaturCount={21}
          amount={1700000}
          goal={10000000}
          imageUrl="https://redaksiindonesia.com/wp-content/uploads/2020/01/Donasi.jpg"
        />
        <DonationCard
          title="Saling membantu untuk indonesia sehat"
          fundraiserName="KamiBisa"
          donaturCount={21}
          amount={1700000}
          goal={10000000}
          imageUrl="https://redaksiindonesia.com/wp-content/uploads/2020/01/Donasi.jpg"
        />{' '}
        <DonationCard
          title="Saling membantu untuk indonesia sehat"
          fundraiserName="KamiBisa"
          donaturCount={21}
          amount={1700000}
          goal={10000000}
          imageUrl="https://redaksiindonesia.com/wp-content/uploads/2020/01/Donasi.jpg"
        />
      </HStack>
    </Stack>
  )
}
