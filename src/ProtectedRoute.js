import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({isAdmin, isFundraiser, component: Component, ...rest}) => {
  const {alert, auth} = useSelector(state => state);

  return (
    <>
      {
        alert.loading === false && (
          <Route
            {...rest}
            render={props => {
              if (!auth.user) {
                return <Redirect to='/login' />
              }

              if (isFundraiser === true && auth.user.role !== 'fundraiser') {
                return <Redirect to='/' />
              }

              if (isAdmin === true && auth.user.role !== 'admin') {
                return <Redirect to='/' />
              }
              return <Component {...props} />
            }}
          />
        )
      }
    </>
  );
}

export default ProtectedRoute;