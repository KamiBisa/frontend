import { Heading, Stack, Text, useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

import { useHistory, useParams } from 'react-router-dom'
import adminService from '../services/adminService'

export default function AdminPage() {
  const { type } = useParams()
  const [data, setData] = useState([])
  const history = useHistory()

  useEffect(() => {
    if (type === 'fundraiser') {
      adminService.getFundraiserRequests().then(res => setData(res.data))
    } else if (type === 'program') {
      adminService.getProgramRequests().then(res => setData(res.data))
    } else if (type === 'withdrawal') {
      adminService.getWithdrawalRequests().then(res => setData(res.data))
    }
  }, [])

  return (
    <>
      <Stack mt="10vh" h="50vh" alignItems="center" justifyContent="center">
        <Stack
          w="100%"
          maxW={{ base: '90vw', xl: '80vw' }}
          isInline
          alignItems="center"
          justifyContent="space-between"
          pb={4}
          color="kamibisa.text"
          cursor="pointer"
        >
          <Heading onClick={() => history.push('/admin/fundraiser')}>
            Verify Fundraisers
          </Heading>
          <Heading onClick={() => history.push('/admin/program')}>
            {' '}
            Verify Programs
          </Heading>
          <Heading onClick={() => history.push('/admin/withdrawal')}>
            Verify Withdrawals
          </Heading>
        </Stack>
      </Stack>
    </>
  )
}
