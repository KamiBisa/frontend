import { useToast } from '@chakra-ui/react'
import { Route, Redirect } from 'react-router-dom'
import { getCredentials } from '../../utilities/credentials'

const GuestRoute = ({ component: Component, ...rest }) => {
  const credentials = getCredentials()
  const toast = useToast()
  const isLoggedIn = credentials ? true : null
  const isAuthenticated = () => {
    if (typeof window == 'undefined') {
      return false
    }
    if (isLoggedIn) {
      return isLoggedIn
    } else {
      return false
    }
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated()) {
          return <Component {...props} />
        } else {
          toast({
            position: 'top',
            status: 'warning',
            description: 'Kamu sudah login!',
          })
          return <Redirect to="/" />
        }
      }}
    />
  )
}

export default GuestRoute
