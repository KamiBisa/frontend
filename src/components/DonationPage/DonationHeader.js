import {
  Box,
  Button,
  Heading,
  Image,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'

export default function DonationHeader() {
  return (
    <Stack
      w="100%"
      spacing={5}
      bg="blue.50"
      py={10}
      px={{ base: '20px', md: '5vw' }}
    >
      <Heading fontSize="4xl">Yuk bantu untuk indonesia lebih sehat!</Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        alignItems="center"
        bg="white"
        p={4}
        borderRadius={8}
      >
        <Image src="https://via.placeholder.com/300x300.jpg" borderRadius={8} />
        <Stack w="100%" spacing={4}>
          <Text fontSize="3xl">Indonesia Sehat</Text>
          <Text>29 Donatur</Text>
          <Progress value={10} />
          <Stack isInline justifyContent="space-between">
            <Box>
              <Text fontSize="2xl">Rp.361.000</Text>
              <Text fontSize="sm">Terdanai</Text>
            </Box>
            <Box>
              <Text fontSize="2xl">Rp. 4.000.000</Text>
              <Text fontSize="sm">Terdanai</Text>
            </Box>
          </Stack>
          <Stack isInline w="100%" spacing={50}>
            <Button colorScheme="green" w="100%">
              Donasikan
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
