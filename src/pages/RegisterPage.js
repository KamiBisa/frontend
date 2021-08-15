import React, { useState } from 'react'
import {
  Box,
  Text,
  Link,
  Input,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

export default function RegisterPage() {
  const history = useHistory()

  const [person, setPerson] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setPerson({ ...person, [name]: value })
  }

  const ChangeHistory = () => {
    const name = person.fullName
    console.log(name)
  }
  return (
    <>
      <Box
        bgColor="#f6fbff"
        h="calc(100vh - 65px)"
        display="flex"
        w="100%"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
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
              >
                Sign Up
              </Heading>
            </Box>
            <Box
              w="80%"
              d="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              h="160px"
              bgcolor="black"
            >
              <FormControl id="email" _hover={{ border: 'none' }}>
                <FormLabel></FormLabel>
                <Box marginBottom="10px">
                  <Input
                    type="fullName"
                    name="fullName"
                    value={person.fullName}
                    onChange={handleChange}
                    placeholder="FullName"
                  ></Input>
                </Box>
                <Box marginBottom="10px">
                  <Input
                    type="email"
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                    placeholder="Email"
                  ></Input>
                </Box>
                <Box marginBottom="20px">
                  <Input
                    type="password"
                    name="password"
                    value={person.password}
                    onChange={handleChange}
                    placeholder="Password"
                  ></Input>
                </Box>
              </FormControl>
              <Box>
                <Button
                  w="100%"
                  borderRadius="100px"
                  disabled={
                    !person.fullName && !person.email && !person.password
                      ? true
                      : false
                  }
                >
                  Masuk
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="black"
            w="100%"
            h="60px"
          >
            <Text>
              already have an Account ?{' '}
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
      </Box>
    </>
  )
}
