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
import { useHistory } from 'react-router-dom'

export default function DonationHeader({ props }) {
  var formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
  const history = useHistory()

  return (
    <Stack
      w="100%"
      spacing={5}
      bg="blue.50"
      py={10}
      px={{ base: 10, md: '5vw' }}
    >
      <Heading fontSize="4xl">{props.title}</Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        alignItems="center"
        bg="white"
        p={4}
        borderRadius={8}
      >
        <Image
          src={props.imageUrl}
          maxW="300px"
          maxH="300px"
          borderRadius={8}
        />
        <Stack w="100%" spacing={4}>
          <Text fontSize="3xl">{props.fundraiserName}</Text>
          <Text>{props.donaturCount} Donatur</Text>
          <Progress value={(props.amount / props.goal) * 100} />
          <Stack isInline justifyContent="space-between">
            <Box>
              <Text fontSize="2xl">{formatter.format(props.amount)}</Text>
              <Text fontSize="sm">Terdanai</Text>
            </Box>
            <Box>
              <Text fontSize="2xl">{formatter.format(props.goal)}</Text>
              <Text fontSize="sm">Terdanai</Text>
            </Box>
          </Stack>
          <Stack isInline w="100%" spacing={50}>
            <Button
              colorScheme="blue"
              w="100%"
              onClick={() => history.push('/give-donation')}
            >
              Donasikan
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
