import { Box, Image, Progress, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export default function DonationCard({
  title,
  fundraiserName,
  amount,
  goal,
  imageUrl,
}) {
  // box with image with placeholder inside
  var formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return (
    <Box
      w={{ base: 160, md: 350 }}
      h={{ base: 250, md: 400 }}
      borderRadius={15}
      border="1px solid grey"
      bg="#f0f0f0"
      fontSize={{ base: 'xs', md: 'md' }}
    >
      <Image src={imageUrl} borderRadius="15px 15px 0 0" />
      <Box p={3}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Text fontWeight="bold">{title}</Text>
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
