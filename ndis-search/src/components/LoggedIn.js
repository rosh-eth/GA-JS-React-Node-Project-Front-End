import React, {useContext} from 'react';
import {Button} from 'react-bootstrap';
import {LoginContext} from '../App';

export const LoggedIn = () => {

    const loginContext = useContext(LoginContext);

    const handleLogOut = () => {
        fetch('/api/auth/logout').then((res) => {
            loginContext.setLoginState(false);
         })
        };


    return <React.Fragment>
    
        <p>You are logged in {loginContext.userProfile.profile.name}</p>

        <Button type="submit" onClick={() => handleLogOut()}>Logout</Button>
        
        </React.Fragment>
}
