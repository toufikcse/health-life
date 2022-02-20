import React from 'react';
import goal from '../../Images/goal.png';

const OurGoal = () => {
    return (
        <div className="card mb-3" style={{margin: '25px', textAlign: 'center'}}>
            <h1 style={{marginTop: '25px', color: 'green'}}>Our Goal</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <img style={{width: '50%'}} className="card-img-top" src={goal} alt="" />
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum, laudantium accusantium commodi consequatur veniam earum porro exercitationem officia totam aperiam ex perferendis nostrum nisi velit incidunt, saepe esse amet cum ad ipsam. Aspernatur expedita qui eligendi natus non incidunt sunt, necessitatibus veniam nobis enim perspiciatis nisi minus inventore voluptatibus itaque voluptatem laudantium ipsa ipsum commodi soluta. Libero dignissimos placeat quasi iste, doloremque minus delectus architecto dolores soluta iure! Aut consequuntur, qui nisi quidem modi, quam sed nihil ex deserunt ab, aliquam repellendus et ea eveniet vero laboriosam exercitationem quo possimus ipsa temporibus magnam a perferendis? Eius rerum architecto commodi.</p>
            </div>
        </div>
    );
};

export default OurGoal;