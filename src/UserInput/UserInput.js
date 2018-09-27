import React from 'react';

const userInput = (props) => {
    return <div><input className="UserInput" type="text" onChange={props.change} value={props.username}/></div>
}

export default userInput;