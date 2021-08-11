import { Box, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import DonationCard from '../components/DonationCard';

export default function Home() {
  return (
    <Box p={5}>
      <DonationCard
        title="Saling membantu untuk Indonesia sehat"
        fundraiserName="KamiBisa"
        amount={1700000}
        goal={10000000}
        imageUrl="https://redaksiindonesia.com/wp-content/uploads/2020/01/Donasi.jpg"
      />
    </Box>
  );
}
