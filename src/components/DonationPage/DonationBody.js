import { Divider, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function DonationBody({ props }) {
  return (
    <Stack bg="white" px={{ base: 10, md: '5vw' }} spacing={4} py={10}>
      <Heading>Description</Heading>
      <Divider />
      <Text>{props.desc}</Text>
    </Stack>
  )
}
