import React from 'react';

const Char = (props) => {
    return (
        <div className="Char" onClick={props.click}>
            {props.character}
        </div>
    );
}

export default Char;