import React, { useState , useEffect} from 'react';
import { Container, Form, Button } from 'react-bootstrap'

const Home = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [counter, setCounter] = useState(0);
    const [banana, setBanana] = useState('')

    useEffect(() => {
        document.title = `Hi there ${userName}`;
      });

    const userInput = (event) => {
        setUserName(event.target.value);
        
    }


    return (
        <React.Fragment>
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={userInput} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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