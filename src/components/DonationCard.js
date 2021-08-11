import { Box, Image, Progress, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react';

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
  });
  return (
    <Box
      w={{ base: 160, md: 350 }}
      minH={{ base: 250, md: 400 }}
      borderRadius={15}
      border="1px solid grey"
      bg="#f0f0f0"
      fontSize={{ base: 'xs', md: 'md' }}
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
            <Text>Oleh {fundraiserName}</Text>
          </Stack>
          <Progress size="sm" value={(amount / goal) * 100} />
          <Stack isInline justifyContent="space-between">
            <Box>
              <Text fontWeight="bold">{formatter.format(amount)}</Text>
              <Text>Donated</Text>
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
              <Text fontWeight="bold">{formatter.format(goal)}</Text>
              <Text fontSize="sm">Goal</Text>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
