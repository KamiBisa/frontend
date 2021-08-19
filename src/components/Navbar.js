import {
  Box,
  Image,
  Text,
  Stack,
  Input,
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

const Navbar = () => {
  const history = useHistory()
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
            color="blue.500"
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

          <HStack d={{ base: 'none', md: 'flex' }}>
            <Button
              variant="ghost"
              d={{ base: 'none', md: 'block' }}
              onClick={() => history.push('/login')}
            >
              Sign In
            </Button>
            <Button
              variant="ghost"
              d={{ base: 'none', md: 'block' }}
              onClick={() => history.push('/register')}
            >
              Register
            </Button>
          </HStack>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
