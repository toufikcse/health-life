import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useStateEffect from '../../Hooks/useStateEffect';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();
    const {services} = useStateEffect();
    const service = services.find(service => service.id == serviceId);

    const handleAppointment = () => {
        navigate('/appointment');
    }

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={service?.image} />
                <Card.Body>
                <Card.Title>{service?.name}</Card.Title>
                <Card.Text>
                    {service?.details}
                </Card.Text>
                <Button onClick={handleAppointment} variant="warning">take appointment</Button>
                <br />
                <br />
                <Link to="/services">
                    <Button variant="success">Back Services</Button>
                </Link>
                </Card.Body>    
            </Card>
        </div>
    );
};

export default ServiceDetail;