import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../components/ProfilePage/ProfileHeader'
import ProfileBody from '../components/ProfilePage/ProfileBody'
import Footer from '../components/Home/Footer'

export default function ProfilePage() {
  return (
    <Stack spacing={4} w="100%" minH="100vh" bg="#f0f0f0">
      <ProfileHeader />
      <ProfileBody />
      <Footer />
    </Stack>
  )
}
