//import {Container} from '@material-ui/core';
//import Navbar from './Navbar';
import '../../src/App.css'
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleGetUsers } from '../actions/users';
import Signin from './Signin';
import { useSelector } from 'react-redux';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LeaderboardUser from './LeaderboardUser';
import QuestionDetail from './QuestionDetail';
import NavbarApp from './Navbar';
import NewQuestion from './NewQuestion';
import { Container, Spinner } from 'react-bootstrap';
import NotFound from './NotFound';
import Result from './Result';



export default function App() {

  const dispatch = useDispatch();
 
  
  useEffect(() => {
    dispatch(handleGetUsers());
  }, [] )

  //const LoggedUser = useSelector(state => state.loggedUser);
  const IsLogged = useSelector(state => state.loggedUser !== null);
  const IsLoading = useSelector(state => Object.keys(state.users).length === 0);

  return (

    <Router>
       {IsLogged === false ?  <Signin/> :  (IsLoading === true ? <Spinner style={{marginTop: "30%%"}} animation="border" variant="secondary"/> : 
      
        <Fragment>
          <NavbarApp />
          <Container style={{maxWidth: "700px", textAlignLast: 'center'}}>
            <Switch >
              <Route path='/' exact component={Home}/>
              <Route path='/leaderBoard' component={LeaderboardUser} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/question/:id' component={QuestionDetail}/>
              <Route path='/result/:id' component={Result}/>
              <Route component={NotFound}/>
            </Switch>
          </Container>
        </Fragment> 
        )}
    
    </Router>

   
  );
}


