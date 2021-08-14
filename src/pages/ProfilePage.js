import { Stack } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../components/ProfilePage/ProfileHeader'

export default function ProfilePage() {
  return (
    <Stack w="100vw" minH="100vh" bg="#f0f0f0">
      <ProfileHeader />
    </Stack>
  )
}
