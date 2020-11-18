import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {  
  var session_token=sessionStorage.getItem('token')
  return (
    <Route {...rest} render={props => (
     session_token != null  ? (
      < Component  {...props} />
      ) : (
            <Redirect to={{
              pathname:'/login',
              }}
            />
          )
      )} 
    />
  )
};


export default PrivateRoute;