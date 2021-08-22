import React, { StrictMode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from './utilities/theme'

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
)
