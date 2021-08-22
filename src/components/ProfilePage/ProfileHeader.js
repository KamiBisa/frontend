import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import authService from '../../services/authService'
import toCurrency from '../../utilities/toCurrency'
import TopupModal from './TopupModal'

export default function ProfileHeader() {
  const [user, setUser] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    authService.getProfile().then(data => setUser(data.userData.user))
  }, [])

  return (
    <>
      <Flex py={5} justifyContent="center" bg="kamibisa.bg">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'center', md: 'space-evenly' }}
          textAlign={{ base: 'center', md: 'left' }}
          bg="kamibisa.bg"
          borderRadius="15px"
          py={5}
          spacing={5}
          w="80%"
        >
          <Box>
            <Avatar size="xl" src={user?.avatar} />
          </Box>
          <Stack>
            <Text fontSize="3xl">{user?.fullname}</Text>
            <Text>
              {user?.email} &bull; {user?.username}
            </Text>
          </Stack>
          <Stack
            bg="kamibisa.bg"
            borderWidth="1px"
            borderColor="kamibisa.primary"
            alignItems="center"
            borderRadius="15px"
            minW="300px"
            p={4}
          >
            <Text>E-Wallet</Text>
            <Text fontSize="3xl">{toCurrency(user?.walletBalance)}</Text>
            <Button variant="primary" w="100%" onClick={onOpen}>
              Top-up
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <TopupModal isOpen={isOpen} onClose={onClose} walletId={user.walletId} />
    </>
  )
}
