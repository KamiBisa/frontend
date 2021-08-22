import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
} from '@chakra-ui/react'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router-dom'
import { getCredentials } from '../utilities/credentials'
import authService from '../services/authService'

const Navbar = () => {
  const history = useHistory()
  const credentials = getCredentials()
  const isLoggedIn = credentials ? true : null
  const isAuthenticated = () => {
    if (typeof window == 'undefined') {
      return false
    }
    if (isLoggedIn) {
      return isLoggedIn
    } else {
      return false
    }
  }

  return (
    <>
      <Box w="100%" h="50px">
        <Box
          zIndex="100"
          bgColor="#FAFAFA"
          w="100%"
          position="fixed"
          fontSize="16px"
          height="65px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={{ base: 10, md: '10vw' }}
          shadow="lg"
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
            onClick={() => history.push('/')}
            color="kamibisa.primary"
            cursor="pointer"
          >
            KamiBisa
          </Text>

          <Box d={{ md: 'none' }} pointerEvents={{ md: 'none' }}>
            <Menu>
              <MenuButton>
                <GiHamburgerMenu
                  color="rgba(160, 158, 158, 0.89)"
                  fontSize="22px"
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => history.push('/login')}>
                  Login
                </MenuItem>
                <MenuItem onClick={() => history.push('/register')}>
                  Register
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          {!localStorage.getItem('user') ? (
            <HStack d={{ base: 'none', md: 'flex' }}>
              <Button
                variant="ghost"
                d={{ base: 'none', md: 'block' }}
                onClick={() => history.push('/register')}
              >
                Register
              </Button>
              <Button
                variant="ghost"
                d={{ base: 'none', md: 'block' }}
                onClick={() => history.push('/login')}
              >
                Sign In
              </Button>
            </HStack>
          ) : (
            <HStack d={{ base: 'none', md: 'flex' }}>
              <Button
                variant="ghost"
                d={{ base: 'none', md: 'block' }}
                onClick={() => history.push('/profile')}
              >
                Profile
              </Button>
              <Button
                variant="ghost"
                d={{ base: 'none', md: 'block' }}
                onClick={() => {
                  authService.logout()
                  history.push('/login')
                }}
              >
                Logout
              </Button>
            </HStack>
          )}
        </Box>
      </Box>
    </>
  )
}

export default Navbar
