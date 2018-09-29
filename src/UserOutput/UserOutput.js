import React from 'react';

//Stateless component can't access state variable, only receive props from external;
//Stateless component don't have React lifecycle;
const userOutput = (props) => {
    return <div className="UserOutput">
        <p>My name is {props.username}</p>
        <p>I am {props.age} years old</p>
    </div>
}

export default userOutput;