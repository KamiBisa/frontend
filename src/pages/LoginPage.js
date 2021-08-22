import {
  Box,
  Text,
  Link,
  Input,
  FormControl,
  FormLabel,
  Button,
  Heading,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import authService from '../services/authService'

const LoginPage = () => {
  const history = useHistory()
  const toast = useToast()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await authService.login(username, password).then(res => {
      if (res.success) {
        toast({
          position: 'top',
          status: 'success',
          title: 'Success',
          description: 'Login berhasil!',
        })
        if (res.user.role === 'admin') {
          history.push('/admin')
        } else {
          history.push('/profile')
        }
      } else {
        toast({
          position: 'top',
          status: 'error',
          title: 'Error',
          description: 'Email atau password kamu salah!',
        })
      }
    })
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
          h="290px"
          boxShadow=" 0 1px 10px rgba(0,0,0,.1)"
          borderRadius="20px"
        >
          <Box
            w="100%"
            h="230px"
            bgColor="white"
            d="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            fontSize="20px"
            paddingTop="10px"
            borderRadius="20px"
          >
            <Box h="35px">
              <Heading
                as="h3"
                fontFamily="sans-serif"
                fontSize="25px"
                fontWeight="bold"
                color="kamibisa.text"
              >
                Sign In
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
              <FormControl _hover={{ border: 'none' }}>
                <FormLabel htmlFor="email"></FormLabel>
                <Box marginBottom="10px">
                  <Input
                    type="email"
                    name="email"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                    autoComplete="off"
                  ></Input>
                </Box>
                <Box>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="off"
                    marginBottom="20px"
                  ></Input>
                </Box>
              </FormControl>
              <Box>
                <Button
                  w="100%"
                  variant="primary"
                  borderRadius="10px"
                  onClick={handleSubmit}
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
              Belum punya akun?{' '}
              <Link
                src="#"
                color="#3A99D8"
                _hover={{ color: 'blue' }}
                onClick={() => history.push('/register')}
              >
                Sign Up
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default LoginPage
