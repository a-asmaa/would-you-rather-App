 import React, { Component } from 'react'
import { Card, Col, Form, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { handleAnswerQuestion } from '../actions/questions';
import { Redirect } from 'react-router';
 

class QuestionDetail extends Component {

    state={
        answer: '',
        toResult: false
    }
    
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({answer: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch , id} = this.props;
        dispatch(handleAnswerQuestion({ qid: id, answer: this.state.answer}));

        this.setState({toResult: true});

    }

    render() {

        const {question, author, id} = this.props;
        const optionOne = question.optionOne.text;
        const optionTwo = question.optionTwo.text;
        const answer = this.state.answer;

        console.log(this.props)
        
        const path=`/result/${id}`

        if(this.state.toResult === true) return <Redirect to={path} />
        
         return (
            <Card style={{marginTop: "1rem", textAlignLast: "left"}}>
                <Card.Header as="h5"> {author.name} asks </Card.Header>
            <Row>
            <Col sm={3} md={3} lg={3}> <Image src={author.avatarURL} width="170px" height="170px"/> </Col>
            <Col sm={9} md={9} lg={9}>
               <Card.Body>
                    <Card.Title>Would you rather .. </Card.Title>
                    <Card.Text>
                        <Form.Check className="mb-3"
                        label={optionOne} value="optionOne"
                        name="group1" onClick={this.handleChange}
                        type="radio"
                        id={`inline-radio-1`}
                        />
                        <Form.Check 
                            label={optionTwo} value="optionTwo"
                            name="group1"
                            type="radio" onClick={this.handleChange}
                            id={`inline-radio-2`}
                        />
                    </Card.Text>
                    <Button variant="primary" disabled={answer === ''}
                    onClick={e => this.handleSubmit(e,question.id)}>Submit Answer</Button>
                </Card.Body>
             </Col>
            </Row>
        </Card>
         )
    }
 }
 
function mapStateToProps({users, questions, loggedUser}, props){

   const { id } = props.match.params
    return {
        author: users[questions[id].author],
        question: questions[id],
        id,
        loggedUser

    }

}
 export default connect(mapStateToProps)(QuestionDetail)