import React, { useState } from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { AddQuestion } from '../actions/questions';

export default function NewQuestion() {

    const [option1,setOption1]  = useState("");
    const [option2,setOption2]  = useState("");
    const [toHome,setToHome]= useState(false);

    const dispatch = useDispatch();


    function handleChangeOP1(e){
        setOption1(e.target.value);
    }

    function handleChangeOP2(e){
        setOption2(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(option2);
       dispatch(AddQuestion({ optionOneText: option1, optionOneText: option2 }));

       setToHome(true);
    }

    if(toHome === true){
        return <Redirect to='/'/>
    }

    return (
        <Container style={{maxWidth: "500px", textAlignLast: 'center', marginTop: "1rem"}}>
        <Card className="text-center" border="success" >
            <Card.Header>Create new Question</Card.Header>
            <Card.Body>
                <Card.Title>Would you rather ?</Card.Title>
                <Form className="text-center">
                        <Form.Control type="text" placeholder="Enter option one" value={option1} 
                        onChange={handleChangeOP1} style={{margin: "2rem 0 1rem"}}/>
                       
                        <Form.Label>OR</Form.Label>
                        <Form.Control type="text" placeholder="Enter option two" value={option2} 
                        onChange={handleChangeOP2} style={{marginBottom: "1rem"}}/>
                    <Button variant="primary" type="submit" onClick={handleSubmit}
                            disabled={option1 === '' || option2 === ''} 
                            style={{marginTop:"1rem", width:"-webkit-fill-available"}}>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </Container>
    )
}
