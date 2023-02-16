import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({ item, handleDelete }) => {
    const {id, title, bag, price, date} = item;
    return (
        <div>
            <Card style={{ maxWidth: '700px' }} className='my-4'>
                <Card.Img variant="top" className=''/>
                <Card.Body>
                    <Card.Title>Item: {title}</Card.Title>
                    <Card.Text>Bag Weight: { bag} </Card.Text>
                    <Card.Subtitle>Price: ${price} </Card.Subtitle>
                    <Card.Text>Date: {date}</Card.Text>
                    <Button variant="danger" onClick={()=> handleDelete(id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item