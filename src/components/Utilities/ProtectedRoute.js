import { Route, Redirect } from 'react-router-dom'
import { getCredentials } from '../../utilities/credentials'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const credentials = getCredentials()
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
        if (isAuthenticated()) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute
