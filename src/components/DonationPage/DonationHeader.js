import {
  Box,
  Button,
  Heading,
  Image,
  Progress,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import toCurrency from '../../utilities/toCurrency'
import DonationModal from './DonationModal'

export default function DonationHeader({ props }) {
  const history = useHistory()
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: 'Success',
      description: 'Link donasi telah dicopy ke clipboard',
      status: 'success',
    })
  }
  return (
    <>
      <Stack
        w="100%"
        spacing={5}
        bg="blue.50"
        py={10}
        px={{ base: 10, md: '5vw' }}
      >
        <Heading fontSize="4xl">{props.name}</Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={10}
          alignItems="center"
          bg="white"
          p={4}
          borderRadius={8}
        >
          <Image
            src={props.image_url}
            maxW="300px"
            maxH="300px"
            borderRadius={8}
          />
          <Stack w="100%" spacing={4}>
            <Text fontSize="3xl">{props.name}</Text>
            <Text>Oleh {props.fundraiserName}</Text>
            <Progress value={(props.balance / props.goal) * 100} />
            <Stack isInline justifyContent="space-between">
              <Box>
                <Text fontSize="2xl">{toCurrency(props.balance)}</Text>
                <Text fontSize="sm">Terdanai</Text>
              </Box>
              <Box>
                <Text fontSize="2xl">{toCurrency(props.goal)}</Text>
                <Text fontSize="sm">Terdanai</Text>
              </Box>
            </Stack>
            <Stack isInline w="100%">
              <Button variant="primary" w="50%" onClick={onOpen}>
                Donasikan
              </Button>
              <Button variant="secondary" w="50%" onClick={handleShare}>
                Bagikan campaign ini
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <DonationModal
        isOpen={isOpen}
        onClose={onClose}
        donationId={props.program_id}
      />
    </>
  )
}
