import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    kamibisa: {
      primary: '#00AEEF',
      secondary: '#23C3FF',
      text: '#4a4a4a',
      bg: '#f7f7f7',
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'kamibisa.primary',
          color: 'white',
          _hover: {
            bg: 'kamibisa.secondary',
          },
        },
        secondary: {
          bg: 'none',
          border: '1px solid #00AEEF',
          color: 'kamibisa.secondary',
          _hover: {
            bg: 'kamibisa.primary',
            color: 'white',
          },
        },
      },
    },
  },
})

export default theme
