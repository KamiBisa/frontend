import {
  Box,
  Image,
  Img,
  Text,
  Stack,
  UnorderedList,
  Link,
  Input,
  border,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router-dom'

const NavbarItem = ({ children, ...props }) => {
  return (
    <Box
      w={{ base: '95%', md: '100px' }}
      h="40px"
      _hover={{
        md: { bgColor: '#F1f1f1' },
      }}
      textAlign={{ md: 'center' }}
      color="#45545b!important"
      boxShadow={{ base: ' 0 1px 0px rgba(0,0,0,.1)', md: 'none' }}
      {...props}
    >
      <Link src="#" fontFamily="helvetica" _hover={{ textDecoration: 'none' }}>
        <Text>{children}</Text>
      </Link>
    </Box>
  )
}

const Navbar = () => {
  const [clickBar, setClickBar] = useState(false)

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
          <Box
            w="60%"
            bgColor="black"
            display="flex"
            justifyContent="flex-end"
            borderRadius="100px"
            h="45px"
            bgColor="#EAF3F9"
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
          <Box
            w={{ base: '93%', md: 'auto' }}
            position={{ base: 'fixed', md: 'unset' }}
            bgColor="white"
            left="3.5%"
            borderRadius="10px"
            zIndex="1"
            transition="0.5s"
            h={{ base: clickBar ? 'auto' : '0', md: '0px' }}
            boxShadow="0 0 5px rgba(0,0,0,.3)"
            marginTop={{ base: '270px', md: '40px' }}
            d={{ base: clickBar ? 'block' : 'absolute', md: 'flex' }}
            flexDirection={{ md: 'row-reverse' }}
          >
            <Stack
              d={{ base: clickBar ? 'flex' : 'none', md: 'flex' }}
              transition="2s"
              alignItems="flex-end"
              flexDirection={{ base: 'column', md: 'row-reverse' }}
            >
              <NavbarItem
                borderRadius={{ md: '8px' }}
                onClick={() => history.push('./login')}
              >
                Sign In
              </NavbarItem>
              <NavbarItem
                _hover={{
                  base: { color: 'white', bgColor: 'white', border: 'none' },
                  md: { bgColor: '#F1f1f1' },
                }}
                borderRadius="8px"
                onClick={() => history.push('./register')}
              >
                Register
              </NavbarItem>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
