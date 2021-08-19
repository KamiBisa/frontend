import { Avatar, Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react'

export default function ProfileHeader() {
  return (
    <Flex py={5} justifyContent="center" bg="blue.100">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'space-evenly' }}
        textAlign={{ base: 'center', md: 'left' }}
        w="80%"
        bg="white"
        borderRadius="15px"
        py={5}
        spacing={5}
      >
        <Box>
          <Avatar size="xl" />
        </Box>
        <Stack>
          <Text fontSize="3xl">First Last</Text>
          <Text>email@example.com &bull; username</Text>
        </Stack>
        <Stack
          spacing={10}
          isInline
          bg="blue.200"
          p={4}
          justifyContent="center"
          minW="300px"
          borderRadius="15px"
        >
          <Stack>
            <Text>E - Wallet</Text>
            <Text fontSize="3xl">Rp. 100.000,-</Text>
            <Button colorScheme="blue">Top up</Button>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  )
}
