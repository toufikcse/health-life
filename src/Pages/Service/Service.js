import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, image, name, details} = service;

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/services/${id}`}>
                        <Button variant="success">Veiw Detail</Button>
                    </Link>
                    </Card.Body>    
                </Card>
            </Col>
        </div>
    );
};

export default Service;