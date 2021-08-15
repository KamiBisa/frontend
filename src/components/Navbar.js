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
          justifyContent="space-around"
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
            onClick={() => history.push('/')}
            color="blue.500"
            d={{ base: 'none', md: 'block' }}
            cursor="pointer"
          >
            KamiBisa
          </Text>
          <Box
            w="60%"
            display="flex"
            justifyContent="flex-end"
            borderRadius="100px"
            h="45px"
            bgColor="#EAF3F9"
            alignItems="center"
          >
            <Input
              placeholder="Ingin bantu siapa hari ini ? "
              borderRadius="100px"
              w="90%"
              h="45px"
              border="none"
              _focus={{ outline: 'none', border: 'none' }}
            />
          </Box>
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
        </Box>
      </Box>
    </>
  )
}

export default Navbar
