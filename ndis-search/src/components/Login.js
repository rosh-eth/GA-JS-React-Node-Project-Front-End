import React, { useEffect, useState, useContext} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {LoginContext} from '../App';

export function Login() {
 
    const loginContext = useContext(LoginContext);
    const {loginState, setLoginState, userProfile, setUserProfile} = loginContext;

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        queryUserStatus({}, '/api/hello');
    }, []);


    const queryUserStatus = (headers, url) => {
        fetch(url,
            {
                credentials: "same-origin",
                headers: headers
            })
            .then(async data => {
                if (data.status === 200) {
                    const profile = await data.json();
                    console.log(profile);
                    setUserProfile(profile);
                    setLoginState(true);

                }

                if (data.status === 404) {
                    console.log('user not found');
                }
            })
            .catch(e => {
                console.log(e.status);
            })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("You clicked submit");

        queryUserStatus({
            'Authorization': 'Basic ' + btoa(user + ':' + password)
        }, 'http://localhost:4000/api/auth/login')
    }

    const renderForm = () => {
        return (

            <React.Fragment>
            <Container>
                <Form onSubmit={handleSubmit}> 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={user} onChange={(event) => setUser(event.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                
            </Container>
        </React.Fragment>
        )
    }

    // const handleLogOut = () => {
    //     fetch('/auth/logout').then((res) => {
    //         setLoginState(false);
    //      })
    //     };
        
    // const renderLoggedIn = () => {
    //     return <React.Fragment>
        
    //         <p>You are logged in {userProfile.profile.name}</p>

    //         <Button type="submit" onClick={() => handleLogOut()}>Logout</Button>
            
    //         </React.Fragment>
    // }

    return (
        <React.Fragment>
            <Container>
            {!loginState && renderForm()}
            {/* {loginState && renderLoggedIn()} */}
            </Container>
            </React.Fragment>
    )
}


export default Login;