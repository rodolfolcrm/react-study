import React from 'react';

const validation = (props) => {
    let validationMessage = props.textLength <= 5 ? 'Text to short' : 'Text long enough';

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}

export default validation;