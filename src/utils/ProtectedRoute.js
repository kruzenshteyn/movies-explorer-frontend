import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext  } from '../contexts/CurrentUserContext';

const ProtectedRoute = (props) => {  
  const currentUser = React.useContext(CurrentUserContext);
  console.log(props.loggedIn);
  console.log(currentUser);
  return (
    <Route>
      {() =>
        props.loggedIn ? props.children : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;