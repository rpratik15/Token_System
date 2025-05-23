import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserToken({date,machine_name,customer_name,problem,created_by,desc,status,image}) {
  return (
    <div>
        
    
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt='Problem img' />
      <Card.Body>
        <Card.Title>{machine_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>
         {desc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Customer Name : {customer_name}</ListGroup.Item>
        <ListGroup.Item>Reported by : {problem}</ListGroup.Item>
        <ListGroup.Item>Token Genereted by : {created_by}</ListGroup.Item>
      </ListGroup>
     
      <Card.Body>
       
        <Card.Text>
         {status}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserToken