import React from 'react';
import Banner from '../../Banner/Banner';
import Doctors from '../../Doctors/Doctors';
import OurGoal from '../../OurGoal/OurGoal';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <OurGoal></OurGoal>
        </div>
    );
};

export default Home;