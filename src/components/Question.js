import React, { Component } from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';



class Question extends Component {

    state={
        toDetails: false
    }
    

    toQuestionDetail = (e,id) => {
        e.preventDefault();
       // this.props.history.push(`/question/${id}`)
        this.setState({toDetails: true})
    }


    render() {
        
        const { question, author, id, state} = this.props;

        console.log(this.props);
        const questionPath = `/question/${id}`
        const resultPath = `/result/${id}`

        if (this.state.toDetails === true)
        {
            if (state === "unanswered") return <Redirect to={questionPath} />
            if (state === "answered") return <Redirect to={resultPath} />
        } 
        

        return (
            <Card style={{marginBottom: "1rem", textAlignLast: "left"}}>
            <Card.Header as="h5"> {author.name} asks </Card.Header>
            <Row>
            <Col sm={3} md={3} lg={3} > <Image src={author.avatarURL} width="180px" height="150px"/> </Col>
            
            <Col sm={9} md={9} lg={9}>
               <Card.Body>

                    <Card.Title>Would you rather .. </Card.Title>
                    <Card.Text>
                            ... {question.optionOne.text} ...
                    </Card.Text>
                    <Button variant="primary" onClick={e => this.toQuestionDetail(e,question.id)}> View Poll
                   </Button>
                </Card.Body>
                
             </Col>
            </Row>
            
        </Card>
        )
    }
}

function mapStateToProps( {questions, users} , {id, state}){
  
    const question = questions[id];
    const author = users[question.author]
    return {
        question: question, questions,
        author: author,
        state: state
    }
}

export default connect(mapStateToProps)(Question) 