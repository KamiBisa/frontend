import { Box, Image, Progress, Stack, Tag, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import toCurrency from '../utilities/toCurrency'

export default function DonationCard({ title, amount, goal, imageUrl, id }) {
  const history = useHistory()
  return (
    <Box
      bg="white"
      color="kamibisa.text"
      fontSize={{ base: 'xs', md: 'md' }}
      shadow="md"
      transition="all 0.3s"
      _hover={{
        mt: -5,
      }}
      cursor="pointer"
      borderRadius="15px"
      minW="300px"
      onClick={() => history.push(`/donation/${id}`)}
    >
      <Stack
        position="relative"
        alignItems="center"
        borderRadius="15px 15px 0 0"
        p={4}
      >
        <Image src={imageUrl} borderRadius="15px 15px 0 0" w={200} h={200} />
        <Tag
          size={{ base: 'xs', md: 'md' }}
          fontSize={{ base: 'xs', md: 'sm' }}
          position="absolute"
          left="2"
          bottom="2"
          colorScheme="green"
          borderRadius={5}
          p={1}
          px={3}
        >
          Verified
        </Tag>
      </Stack>
      <Box p={3}>
        <Stack spacing={3}>
          <Stack spacing={0.3}>
            <Text fontWeight="bold" noOfLines={2}>
              {title}
            </Text>
          </Stack>
          <Progress size="sm" value={(amount / goal) * 100} />
          <Stack isInline justifyContent="space-between">
            <Box>
              <Text fontSize="sm">{toCurrency(amount)}</Text>
              <Text fontSize="xs" mt={1}>
                Donated
              </Text>
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
              <Text fontSize="sm">{toCurrency(goal)}</Text>
              <Text fontSize="xs" mt={1}>
                Goal
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
