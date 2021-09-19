import React from 'react';
import { Tabs, Tab, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Question from './Question';

export default function Home() {



  const questions = useSelector(state => state.questions)
  const answered = (useSelector(state => state.loggedUser)).answers

    var allQuestions = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    var answeredQuestions = Object.keys(answered)

    var unansweredQuestions = allQuestions.filter(e => ! answeredQuestions.includes(e))

    const IsLoading = allQuestions.length === 0;

    console.log(IsLoading, allQuestions,answeredQuestions,  unansweredQuestions);


  return (
    <>
    {IsLoading === true ? <Spinner style={{marginTop: "40%"}} animation="border" variant="secondary"/> : 
       
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" variant="pills" 
          style={{margin: "1rem 0 0"}}>
      <Tab  eventKey="profile" title="Unanswered Questions">
        {unansweredQuestions.map(id => {
          return <Question key={id} id={id} state="unanswered" />
        }) }
      </Tab>

      <Tab eventKey="home"  title="Answered Questions">
        {answeredQuestions.map(id=> {
          return <Question key={id} id={id} state="answered"/>
          }) }
      </Tab>
  </Tabs>
  }
  
  </>
  );
}