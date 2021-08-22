import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import donationService from '../../services/donationService'
import toCurrency from '../../utilities/toCurrency'

export default function DonationModal({ isOpen, onClose, donationId }) {
  const [amount, setAmount] = useState(0)
  const toast = useToast()
  const handleSubmit = () => {
    donationService.donate(donationId, amount).then(res => {
      if (res.status === 200) {
        toast({
          title: 'Donasi sukses!',
          description: `Terimakasih, kamu telah mendonasikan ${toCurrency(
            amount
          )} dari wallet kamu`,
          status: 'success',
        })
        onClose()
        window.location.reload()
      } else {
        toast({
          title: 'Donasi gagal!',
          description: `E-wallet kamu tidak mencukupi`,
          status: 'error',
        })
      }
    })
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Donasi</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={5} pb={10}>
            <FormControl>
              <FormLabel>Jumlah Donasi: {toCurrency(amount)}</FormLabel>
              <Input
                type="number"
                value={amount}
                onChange={e => setAmount(parseInt(e.target.value))}
              />
            </FormControl>
            <Button variant="primary" w="100%" mt={4} onClick={handleSubmit}>
              Submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
