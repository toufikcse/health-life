import React from 'react';
import { Row } from 'react-bootstrap';
import useStateEffect from '../../Hooks/useStateEffect';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const {doctors} = useStateEffect();

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'red', marginTop: '25px', marginBottom: '25px'}}>Our Doctors</h1>
            <Row xs={1} md={3} className="g-4 m-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;