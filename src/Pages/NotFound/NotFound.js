import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>404</h2>
            <p>Not Found!</p>
            <Link to="/home">
                <Button variant="warning">Back to Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;