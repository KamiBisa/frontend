import React, { useState } from 'react'
import { Box, Text, Link, Input, Button, Stack, Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import authService from '../services/authService'
import goodTeam from '../assets/goodTeam.png'
import okay from '../assets/okay.png'

export default function RegisterPage() {
  const history = useHistory()

  const [choose, setChoose] = useState('')

  const RegisterForm = ({ role }) => {
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
      const res = await authService
        .register(fullName, username, email, password, choose)
        .then(resp => {
          if (resp.success) history.push('/login')
        })
    }

    return (
      <Box
        w={{ base: '93%', md: '50%', xl: '40%' }}
        h="380px"
        boxShadow=" 0 1px 10px rgba(0,0,0,.1)"
        borderRadius="20px"
      >
        <Box
          w="100%"
          h="320px"
          bgColor="white"
          d="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          fontSize="20px"
          paddingTop="10px"
          borderRadius="20px"
        >
          <Box h="100px">
            <Heading
              as="h3"
              fontFamily="sans-serif"
              fontSize="25px"
              fontWeight="bold"
              color="kamibisa.text  "
            >
              Daftar sebagai {role}
            </Heading>
          </Box>
          <Box
            w="80%"
            d="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            h="160px"
          >
            <Stack spacing="8">
              <Stack>
                <Input
                  type="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Full Name"
                ></Input>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email"
                ></Input>
                <Input
                  type="text"
                  name="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Username"
                ></Input>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                ></Input>
              </Stack>
              <Box>
                <Button
                  w="100%"
                  variant="primary"
                  borderRadius="10px"
                  onClick={handleSubmit}
                >
                  Daftar
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="60px"
        >
          <Text>
            Sudah punya akun?{' '}
            <Link
              src="#"
              color="#3A99D8"
              _hover={{ color: 'blue' }}
              onClick={() => history.push('./login')}
            >
              Sign In
            </Link>
          </Text>
        </Box>
      </Box>
    )
  }

  const ChooseRole = ({ role }) => (
    <Stack
      justifyContent="center"
      alignItems="center"
      bg="kamibisa.bg"
      border="0.5px solid #00AEEF"
      borderRadius="15px"
      w="400px"
      color="kamibisa.text"
      textAlign="center"
      py="20px"
      px="30px"
      spacing={2}
    >
      <Heading>Daftar sebagai {role}</Heading>
      {role === 'Donor' && <Image src={okay} w={300} h={300} />}
      {role === 'Fundraiser' && <Image src={goodTeam} w={300} h={300} />}
      <Text>
        {role === 'Donor' &&
          'Daftar untuk mulai memberikan donasi pada campaign - campaign yang ada!'}
        {role === 'Fundraiser' &&
          'Daftar untuk mulai membuat campaign baru di KamiBisa!'}
      </Text>
      <Button w="100%" variant="primary" onClick={() => setChoose(role)}>
        Daftar
      </Button>
    </Stack>
  )

  return (
    <Box bgColor="kamibisa.bg" h="calc(100vh - 65px)" w="100%">
      (
      <Stack justifyContent="center" alignItems="center" p="5vh">
        {!choose && (
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
            <ChooseRole role="Donor" />
            <ChooseRole role="Fundraiser" />
          </Stack>
        )}
        {choose === 'Donor' && <RegisterForm role={choose} />}
        {choose === 'Fundraiser' && <RegisterForm role={choose} />}
      </Stack>
    </Box>
  )
}
