import { Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'

export default function ProfileBody() {
  return (
    <Stack px={{ base: 10, md: '10vw' }} py={10}>
      <Stack p={4} bg="blue.500" borderRadius="15px">
        <Text fontSize="2xl">History Donasi</Text>
        <Stack bg="white" p={4} borderRadius="5px">
          <Text>Donasi Name</Text>
          <Text>Rp. 50.000</Text>
        </Stack>
        <Stack bg="white" p={4} borderRadius="5px">
          <Text>Donasi Name</Text>
          <Text>Rp. 50.000</Text>
        </Stack>
        <Stack bg="white" p={4} borderRadius="5px">
          <Text>Donasi Name</Text>
          <Text>Rp. 50.000</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
