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
import React from 'react'
import DonationSection from '../components/Home/DonationSection'
import Footer from '../components/Home/Footer'

export default function Home() {
  return (
    <Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        h="250px"
        bg="blue.500"
        textAlign="center"
        px={{ base: 5, md: 10 }}
        color="#f0f0f0"
      >
        <Heading as="h1" fontSize="5xl">
          kamibisa.
        </Heading>
        <Text fontSize="xl">
          Mari bersama gotong royong membantu donasi untuk yang membutuhkan.
        </Text>
      </Stack>
      <DonationSection />
      <Footer />
    </Box>
  )
}
