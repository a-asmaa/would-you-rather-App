import React from 'react'
import { Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function LeaderboardUser() {

    const userState = useSelector(state => state.users)
    const users = Object.keys(userState).reduce((array, id) => {
        return [...array,  userState[id]]
               }, [])

    console.log(users);
    let orderUsers = users.sort((a,b) => {
      return ((b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers)))
    })

    console.log(orderUsers);
    return (
        <>
        {users.map(user=> {
                const askedQues= user.questions?.length;
                const answeredQues= Object.keys(user.answers).length ;
                const score = askedQues + answeredQues;
               
               
               return <Card key={user.id} style={{marginTop: "1rem", textAlignLast: "left"}}>
                     <Row>
                        <Col sm={3} md={3} lg={3}> 
                            <Image src={user.avatarURL} width="170px" height="170px"/>
                        </Col>
                        <Col sm={9} md={9} lg={9}>
                            <Card.Body style={{paddingBottom: "0"}}>
                            <Card.Title>{user.name}</Card.Title>
                            </Card.Body>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem> Asked: {askedQues} </ListGroupItem>
                                <ListGroupItem> Answered: {answeredQues} </ListGroupItem>
                                <ListGroupItem>Score: {score} </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card>

        })}
        </>
        
    )
}
