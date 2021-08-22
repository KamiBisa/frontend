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

export default function CampaignModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [goal, setGoal] = useState('')
  const [image, setImage] = useState('')
  const toast = useToast()
  const handleSubmit = () => {
    donationService.create(name, description, goal, image).then(res => {
      if (res.status === 200) {
        toast({
          title: 'Campaign dibuat!',
          description: 'Campaign kamu telah dibuat',
          status: 'success',
        })
        onClose()
        window.location.reload()
      } else {
        toast({
          title: 'Pembuatan campaign gagal!',
          description: `Akun kamu belum diverifikasi oleh admin`,
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
          <ModalHeader>Buat Campaign</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={5} pb={10}>
            <FormControl>
              <FormLabel>Nama Campaign</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Masukkan nama campaign"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Deskripsi</FormLabel>
              <Input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Masukkan deskripsi campaign"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Target Dana : {toCurrency(goal)}</FormLabel>
              <Input
                type="number"
                value={goal}
                onChange={e => setGoal(parseInt(e.target.value))}
                placeholder="Masukkan target donasi"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gambar Campaign</FormLabel>
              <Input
                type="text"
                value={image}
                onChange={e => setImage(e.target.value)}
                placeholder="Masukkan URL Image untuk campaign"
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
