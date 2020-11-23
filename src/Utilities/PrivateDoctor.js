import React from 'react';
import { useHistory, Route } from 'react-router-dom';
import {getUser} from './UserServices'

const PrivateDoctor = ({ component: Component, ...rest }) => {  
    const history =useHistory()
    const  session_token=sessionStorage.getItem('token')
    const session_user = getUser()
  return (
    <Route {...rest} render={props => (
     session_token != null  ? (session_user.role==='d'?(
          < Component  {...props}  />
     ):( 
         history.goBack()
     )
     ) : (
            history.push('/login')
          )
      )} 
    />
  )
};


export default PrivateDoctor;