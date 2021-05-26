import React from 'react';
import { Card } from 'react-bootstrap';



function Country(props){

    return (
        <Card.Body>
            <Card.Img className="w-100" src={`${props.urlToImage}`} />
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        
    )
}

export default Country;
