import React, { useState , useEffect} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {SERVER_API} from '../consts'

const Home = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = `Hi there ${userName}`;
      });

    const userInput = (event) => {
        setUserName(event.target.value);
        
    }

    const userPass = (event) => {
        setPassword(event.target.value);
        
    }

    const handleLogIn = (username, password) => {
        
            console.log("Logging in: ", username, password);
    
            fetch(`${SERVER_API}/auth/login`, {
                method: 'GET',
                authorization: 'Basic ' + btoa(userName + ":" + password)
            })
                .then(async (data) => {
                    if(data.status >= 200 && data.status <= 299)
                    this.props.history.push('/provider');

                })
                .catch((e) => {
                    console.log(e)
                })
        }
    
    // const newFunction = async () => {
    //         const provider = await fetch(`${SERVER_API}/provider/find/${this.props.match.params.id}`)
    //         const providerDetail = await provider.json();
    //         console.log(providerDetail._id)
    //         this.setState({
    //             providerDetail
    //         })
    //     }

    return (
        <React.Fragment>
            <Container>
                <Form onSubmit={handleLogIn}> 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={userInput} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={userPass} type="password" placeholder="Password" />
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

export default Home;