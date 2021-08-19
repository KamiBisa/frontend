import {
  Box,
  Button,
  Checkbox,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

export default function GiveDonationPage() {
  const StackBox = props => {
    const { children, ...rest } = props
    return (
      <Stack {...rest} bg="white" p={4} borderRadius="5px" minH="100px">
        {children}
      </Stack>
    )
  }

  const [donasi, setDonasi] = React.useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })

  return (
    <>
      <Stack
        bg="#f0f0f0"
        w="100%"
        minH="100vh"
        px={{ base: '5vw', md: '20vw' }}
        py="5vh"
      >
        <StackBox direction="row" spacing={10}>
          <Image
            src="https://via.placeholder.com/100x100"
            w="100px"
            h="100px"
            alt="donasi image"
          />
          <Text>
            Donasi untuk{' '}
            <Box as="span" color="blue.300">
              Indonesia Lebih Sehat
            </Box>
          </Text>
        </StackBox>
        <StackBox>
          <Text fontWeight="bold" fontSize="xl">
            First Last
          </Text>
          <Text>username &bull; email@example.com</Text>
        </StackBox>
        <StackBox>
          <Text fontWeight="bold">Nominal Donasi</Text>
          <SimpleGrid columns={2} spacing={4}>
            <Button colorScheme="blue" onClick={() => setDonasi(10000)}>
              Rp 10.000
            </Button>
            <Button colorScheme="blue" onClick={() => setDonasi(50000)}>
              Rp. 50.000
            </Button>
            <Button colorScheme="blue" onClick={() => setDonasi(100000)}>
              Rp. 100.000
            </Button>
            <Button colorScheme="blue" onClick={onOpen}>
              Lainnya
            </Button>
          </SimpleGrid>
        </StackBox>
        <StackBox>
          <Text>Dukungan untuk campaign</Text>
          <Textarea placeholder="Tulis pesan untuk campaign disini..." />
        </StackBox>
        <StackBox spacing={10}>
          <Stack isInline justifyContent="space-between" alignItems="center">
            <Text fontSize="xl">Jumlah Donasi</Text>
            <Text fontWeight="bold">{formatter.format(donasi)}</Text>
          </Stack>
        </StackBox>
        <StackBox>
          <Button colorScheme="green" borderRadius="20">
            Lanjut ke Pembayaran
          </Button>
        </StackBox>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nominal Donasi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack pb={4}>
              <Input
                type="number"
                placeholder="Masukkan nominal donasi..."
                onChange={e => setDonasi(e.target.value)}
                value={donasi}
              ></Input>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
