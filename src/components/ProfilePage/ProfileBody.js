import {
  Button,
  Heading,
  Stack,
  Tag,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/id'

import authService from '../../services/authService'
import toCurrency from '../../utilities/toCurrency'
import CampaignModal from './CampaignModal'
import donationService from '../../services/donationService'
import { useHistory } from 'react-router-dom'

export default function ProfileBody() {
  moment.locale('id')
  const [user, setUser] = useState({})
  const [history, setHistory] = useState([])
  const [listCampaign, setListCampaign] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const historyLink = useHistory()
  const toast = useToast()

  useEffect(() => {
    authService.getProfile().then(data => {
      setUser(data.userData.user)
      setHistory(data.userData.history)
    })
    donationService.getOwnCampaign().then(data => {
      setListCampaign(data.donation_program)
    })
  }, [])

  const HistoryDonasi = () => (
    <>
      <Heading fontSize="3xl">History Donasi</Heading>
      {history.length > 0 ? (
        history.map(donation => (
          <Stack
            mt={4}
            isInline
            alignItems="center"
            justifyContent="space-between"
            bg="white"
            p={4}
            borderRadius="15px"
          >
            <Stack>
              <Text>{donation.programName}</Text>
              <Text>{toCurrency(donation.amount)}</Text>
            </Stack>
            <Text>{moment(donation.timestamp).fromNow()}</Text>
          </Stack>
        ))
      ) : (
        <Stack
          isInline
          alignItems="center"
          justifyContent="space-between"
          bg="white"
          p={4}
          borderRadius="15px"
        >
          <Stack>
            <Text>Kamu belum pernah berdonasi.</Text>
          </Stack>
          <Text></Text>
        </Stack>
      )}
    </>
  )

  const Fundraiser = () => (
    <>
      <Stack isInline justifyContent="space-between" w="100%">
        <Heading fontSize="3xl">List Campaign</Heading>
        <Button variant="primary" onClick={onOpen}>
          Buat Campaign
        </Button>
      </Stack>
      <Stack>
        {listCampaign?.length > 0 ? (
          listCampaign.map(campaign => (
            <Stack
              mt={4}
              isInline
              alignItems="center"
              justifyContent="space-between"
              bg="white"
              shadow="sm"
              p={4}
              borderRadius="10px"
              cursor="pointer"
              onClick={
                campaign.is_verified
                  ? () => historyLink.push(`/donation/${campaign.program_id}`)
                  : () =>
                      toast({
                        position: 'top',
                        status: 'warning',
                        description: 'Campaign ini belum diverifikasi!',
                      })
              }
            >
              <Stack>
                <Text fontSize="xl">{campaign.name}</Text>
              </Stack>
              <Text>
                {campaign.is_verified === null ? (
                  <Tag colorScheme="yellow">Dalam proses verifikasi</Tag>
                ) : campaign.is_verified ? (
                  <Tag colorScheme="green">Terverifikasi</Tag>
                ) : (
                  (<Tag colorScheme="red">Campaign Ditolak</Tag>: '')
                )}
              </Text>
            </Stack>
          ))
        ) : (
          <Stack
            isInline
            alignItems="center"
            justifyContent="space-between"
            bg="white"
            p={4}
            borderRadius="15px"
          >
            <Stack>
              <Text>Kamu belum pernah berdonasi.</Text>
            </Stack>
            <Text></Text>
          </Stack>
        )}
      </Stack>
      <CampaignModal isOpen={isOpen} onClose={onClose} />
    </>
  )

  return (
    <Stack px={{ base: 10, md: '10vw' }} py={10}>
      <Stack
        p={4}
        bg="kamibisa.bg"
        shadow="md"
        borderRadius="5px"
        color="kamibisa.text"
      >
        {user.role === 'donor' && HistoryDonasi()}
        {user.role === 'fundraiser' && Fundraiser()}
      </Stack>
    </Stack>
  )
}
