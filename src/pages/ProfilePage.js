import { Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import ProfileHeader from '../components/ProfilePage/ProfileHeader'
import ProfileBody from '../components/ProfilePage/ProfileBody'
import Footer from '../components/Home/Footer'
import authService from '../services/authService'

export default function ProfilePage() {
  const [data, setData] = useState({})

  useEffect(() => {
    authService.getProfile().then(res => setData(res.userData))
  }, [])

  return (
    <Stack spacing={4} w="100%" minH="100vh" bg="#f0f0f0">
      <ProfileHeader user={data.user} />
      <ProfileBody props={data.history} />
      <Footer />
    </Stack>
  )
}
