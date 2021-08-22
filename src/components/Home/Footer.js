import { Stack, Text, Box } from '@chakra-ui/react'
export default function Footer() {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      bg="blue.500"
      px={{ base: 10, md: '10vw' }}
      py="100px"
      justifyContent="space-between"
      spacing={{ base: 10 }}
    >
      <Stack spacing={5} w={{ base: '100%', md: '50%' }}>
        <Text
          variant="small-text-regular"
          color="white"
          w={{ base: '100%', md: '65%' }}
        >
          <Box as="span" fontWeight="bold">
            KamiBisa
          </Box>{' '}
          adalah fundraising platform yang bertujuan membantu para penggalang
          dana untuk mengumpulkan donasi dari masyarakat.
        </Text>
        <Text pt={5} variant="xs-text-regular" color="white">
          © 2021. KamiBisa
        </Text>
      </Stack>

      <Stack alignItems={{ md: 'flex-end' }} w={{ md: '35%' }}>
        <Stack spacing={4}>
          <Text variant="medium-text-bold" textAlign="left" color="white">
            Contact Us
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
