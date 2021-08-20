import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  HStack,
} from '@chakra-ui/react'
import DonationCard from '../DonationCard'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getVerifiedDonationProgram} from '../../redux/actions/donationProgramActions';

export default function DonationSection() {
  const dispatch = useDispatch();
  const {donationProgram} = useSelector(state => state);

  useEffect(() => {
    dispatch(getVerifiedDonationProgram());
  }, [dispatch]);

  return (
    <Stack px={{ base: 5, md: '10vw' }} py={10} bg="#f0f0f0">
      <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight="bold" p={4}>
        Campaign Kita
      </Text>
      <HStack
        spacing={{ base: 4, md: 8 }}
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '0px',
          },
        }}
        p={4}
      >
        {
          donationProgram.loading ? <h1>Loading</h1> :
          donationProgram.donationPrograms.map(dp => (
            <DonationCard
              title={dp.name}
              fundraiserName="KamiBisa"
              donaturCount={21}
              amount={1700000}
              goal={dp.goal}
              imageUrl={"https://redaksiindonesia.com/wp-content/uploads/2020/01/Donasi.jpg"}
            />
          ))
        }
      </HStack>
    </Stack>
  )
}
