import Button from 'react-bootstrap/Button';
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedUser } from '../actions/loggedUser';
import { Link } from 'react-router-dom';

export default function NavbarApp () {

  const dispatch = useDispatch();
  const loggedUser = useSelector(state => state.loggedUser)

  const handleLogout = () => {
    dispatch(setLoggedUser(null))
  }

    return (
    <Navbar bg="light" variant="light"> 
      <Container>
        <Navbar.Brand >Would you rather </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
          <Nav.Link > <Link  to="/">Home</Link> </Nav.Link>
          <Nav.Link > <Link to="/leaderBoard">Leader Board</Link></Nav.Link>
          <Nav.Link ><Link to="/new">New Question</Link></Nav.Link>

          </Nav>
          <Navbar.Text>
            Signed in as: {loggedUser.name} <Link to="/" onClick={handleLogout}> Logout</Link>  
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
