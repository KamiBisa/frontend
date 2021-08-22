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
import walletService from '../../services/walletService'
import toCurrency from '../../utilities/toCurrency'

export default function TopupModal({ isOpen, onClose, walletId }) {
  const [amount, setAmount] = useState(0)
  const toast = useToast()
  const handleSubmit = () => {
    walletService.topup(walletId, amount).then(res => {
      if (res.status === 200) {
        toast({
          title: 'Topup berhasil!',
          description: `You have berhasil topup ${toCurrency(
            amount
          )} ke wallet kamu`,
          status: 'success',
        })
        onClose()
        window.location.reload()
      } else {
        toast({
          title: 'Topup gagal!',
          description: `Topup gagal. tolong coba lagi.`,
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
          <ModalHeader>Top-up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={5} pb={10}>
            <FormControl>
              <FormLabel>Jumlah Top-up: {toCurrency(amount)}</FormLabel>
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
