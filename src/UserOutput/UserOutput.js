import React from 'react';

const userOutput = (props) => {
    return <div className="UserOutput">
        <p>My name is {props.username}</p>
        <p>I am {props.age} years old</p>
    </div>
}

export default userOutput;