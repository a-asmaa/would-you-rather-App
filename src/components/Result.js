import React, { Component } from 'react'
import { Alert, Card, Col, Image,  ProgressBar, Row } from 'react-bootstrap';
import { connect, } from 'react-redux';
import NotFound from './NotFound';


class Result extends Component {
    
    render() {

        const { question, users, loggedUser}= this.props;
        
        if (typeof question === 'undefined') {
            return <NotFound />
           }

        const user = users[question.author] ;
        console.log(question, user);

        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

        let list = [question.optionOne, question.optionTwo];
        console.log(list);
     //   list = list.sort((a,b) => question['optionOne'].votes.length -  question['optionTwo'].votes.length);
    //    console.log(list);


        return ( <Card style={{marginTop: "1rem", textAlignLast: "left"}}>
            <Card.Header as="h5">  asked by {user.name} </Card.Header>
            <Row>
                <Col sm={3} md={3} lg={3}  style={{alignSelf: "center"}}> 
                <Image src={user.avatarURL} width="170px" height="170px"  style={{marginLeft: "10px", borderRadius:"50%"}}/> </Col>
                <Col sm={9} md={9} lg={9}>
                <Card.Body>
                    <Card.Title> Results: </Card.Title>
                    {list.map(option => {
                        let percentage = option.votes.length * 100 / totalVotes;
                        let userAnswer= option.votes.includes(loggedUser.id);
                            console.log(userAnswer);
                        return <Alert key={option.text} variant={userAnswer ? "success" : "secondary"}>
                        <Alert.Heading  style={{fontSize: "1.1rem"}}>Would you rather {option.text}</Alert.Heading>
                        <ProgressBar striped variant="success" now={percentage} label={`${percentage}%`} />
                        <hr />
                        <p className="mb-0">
                           {option.votes.length} out of {totalVotes} votes
                        </p>
                        </Alert>
                    })}

                    
                </Card.Body>
                
                </Col>
                </Row>
        </Card>
    )
    }
}


function mapStateToProps({questions, users, loggedUser}, props){

    const { id } = props.match.params
    
     return {
         question: questions[id],
         id, 
         users,
         loggedUser: loggedUser
     }
}

export default connect(mapStateToProps)(Result)