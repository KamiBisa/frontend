import {
  Box,
  Stack,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast,
  Tag,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import toCurrency from '../utilities/toCurrency'
import adminService from '../services/adminService'

export default function AdminDashboard() {
  const { type } = useParams()
  const toast = useToast()
  const [data, setData] = useState([])

  useEffect(() => {
    if (type === 'fundraiser') {
      adminService.getFundraiserRequests().then(res => setData(res.data))
    } else if (type === 'program') {
      adminService.getProgramRequests().then(res => setData(res.data))
    } else if (type === 'withdrawal') {
      adminService.getWithdrawalRequests().then(res => setData(res.data))
    }
  }, [])

  const handleAccept = id => {
    if (type === 'fundraiser') {
      adminService.acceptFundraiserRequest(id).then(res => {
        if (res.status === 200) {
          toast({
            status: 'success',
            title: 'Fundraiser terverifikasi!',
            body: `User dengan ID ${id} has been added to the list of Fundraisers`,
          })
        }
      })
    } else if (type === 'program') {
      adminService.acceptProgramRequest(id).then(res => {
        if (res.status === 200) {
          toast({
            status: 'success',
            title: 'Program terverifikasi!',
            body: `User dengan ID ${id} has been added to the list of Programs`,
          })
        }
      })
    } else if (type === 'withdrawal') {
      adminService.acceptWithdrawalRequest(id).then(res => {
        if (res.status === 200) {
          toast({
            status: 'success',
            title: 'Withdrawal terverifikasi!',
            body: `User dengan ID ${id} has been added to the list of Withdrawals`,
          })
        }
      })
    }
  }

  const handleReject = id => {
    if (type === 'fundraiser') {
      adminService.rejectFundraiserRequest(id).then(res => {
        if (res.status === 200) {
          toast({
            status: 'success',
            title: 'Success!',
            description: `Fundraiser telah ditolak`,
          })
        }
      })
    } else if (type === 'program') {
      adminService.rejectProgramRequest(id).then(res => {
        if (res.status === 200) {
          toast({
            status: 'success',
            title: 'Success!',
            description: `Program telah ditolak`,
          })
        }
      })
    } else if (type === 'withdrawal') {
      adminService.rejectWithdrawalRequest(id).then(res => {
        if (res.status === 200) {
          toast({
            status: 'success',
            title: 'Success!',
            description: `Withdrawal telah ditolak`,
          })
        }
      })
    }
  }

  return (
    <>
      <Stack mt="10vh" alignItems="center">
        <Stack
          w="100%"
          maxW={{ base: '90vw', xl: '80vw' }}
          isInline
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Text
            color="gray.500"
            fontSize={{ base: 'xl', md: '2xl', xl: '4xl' }}
            fontWeight="black"
          >
            Verify {type[0].toUpperCase() + type.slice(1)}
          </Text>
        </Stack>

        <Box w="100%" maxW={{ base: '90vw', xl: '80vw' }} overflowX="auto">
          <Table
            variant="simple"
            colorScheme="blackAlpha"
            bg="whiteAlpha.700"
            borderRadius="15px"
          >
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>
                  {type === 'fundraiser' && 'Full Name'}
                  {type === 'program' && 'Program Name'}
                  {type === 'withdrawal' && 'Program ID'}
                </Th>
                <Th>
                  {type === 'fundraiser' && 'Email'}
                  {type === 'program' && 'Goal'}
                  {type === 'withdrawal' && 'Amount'}
                </Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((e, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>
                    {type === 'fundraiser' && e.fullname}
                    {type === 'program' && e.name}
                    {type === 'withdrawal' && e.program_id}
                  </Td>
                  <Td>
                    {type === 'fundraiser' && e.email}
                    {type === 'program' && toCurrency(e.goal)}
                    {type === 'withdrawal' && toCurrency(e.amount)}
                  </Td>
                  <Td>
                    <Tag colorScheme="red">Belum terverifikasi</Tag>
                  </Td>
                  <Td>
                    <Stack isInline>
                      <Button
                        size="sm"
                        colorScheme="green"
                        onClick={() => {
                          if (type === 'fundraiser') handleAccept(e.user_id)
                          else if (type === 'program')
                            handleAccept(e.program_id)
                          else if (type === 'withdrawal')
                            handleAccept(e.withdrawal_id)
                        }}
                      >
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => {
                          if (type === 'fundraiser') handleReject(e.user_id)
                          else if (type === 'program')
                            handleReject(e.program_id)
                          else if (type === 'withdrawal')
                            handleReject(e.withdrawal_id)
                        }}
                      >
                        Reject
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </>
  )
}
