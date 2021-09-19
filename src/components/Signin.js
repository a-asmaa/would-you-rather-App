import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedUser } from '../actions/loggedUser';
import { Card, Container, Form, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function Signin() {

    const [user, setUser] = React.useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setUser(event.target.value);
    };

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
 
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(user, users[user]);
        dispatch(setLoggedUser(users[user]))
    }


    return (
        <Container style={{maxWidth: "500px", textAlignLast: 'center'}}>
            <Card style={{marginTop: '1rem'}}>
            <Card.Header as="h5">Welcome to Would you rather
            <Card.Text style={{fontSize: "15px", fontWeight: "400"}}>Press Sign in to continue ..</Card.Text>
            </Card.Header>
            <Card.Body>
            
            <Form >
                    <Form.Group controlId="formGridState">
                        <Image src="../../assets/signin.jpg" style={{marginBottom: "1rem"}}/>
                    <Form.Select onChange={handleChange} value={user} max>
                        <option value=""> select user</option>
                        {Object.values(users).map(user => {
                                return <option key={user.id} value={user.id}>{user.name}</option>
                            })}
                    </Form.Select>
                    </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleLogin} 
                                disabled={user ===''} style={{marginTop: '1rem', width: "-webkit-fill-available"}}>
                            Sign in 
                        </Button>
                </Form>

            </Card.Body>
        </Card> 
      </Container>
   )
}


 /**
  *  {Object.values(users).map(user => {
                          return <MenuItem key={user.id}>{user.name}</MenuItem>
                      })}
  */
  