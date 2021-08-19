import { Box, Image, Progress, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function DonationCard({
  title,
  fundraiserName,
  amount,
  goal,
  imageUrl,
  donaturCount,
}) {
  // box with image with placeholder inside
  var formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
  const history = useHistory()
  return (
    <Box
      bg="#f0f0f0"
      fontSize={{ base: 'xs', md: 'md' }}
      shadow="md"
      transition="all 0.3s"
      _hover={{
        mt: -5,
      }}
      cursor="pointer"
      borderRadius="15px"
      minW="300px"
      onClick={() => history.push('/donation')}
    >
      <Box position="relative">
        <Image src={imageUrl} borderRadius="15px 15px 0 0" />
        <Tag
          size={{ base: 'xs', md: 'md' }}
          fontSize={{ base: 'xs', md: 'sm' }}
          position="absolute"
          left="2"
          bottom="2"
          colorScheme="blue"
          borderRadius={5}
          p={1}
        >
          {donaturCount} Donatur
        </Tag>
      </Box>
      <Box p={3}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Text fontWeight="bold" noOfLines={2}>
              {title}
            </Text>
          </Stack>
          <Progress size="sm" value={(amount / goal) * 100} />
          <Stack isInline justifyContent="space-between">
            <Box>
              <Text fontSize="sm">{formatter.format(amount)}</Text>
              <Text fontSize="xs" mt={1}>
                Donated
              </Text>
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
              <Text fontSize="sm">{formatter.format(goal)}</Text>
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
