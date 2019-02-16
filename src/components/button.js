import React from 'react';

const Button = ({buttonName, onClickFunction}) => (
    <div>
        <button onClick={onClickFunction} className="button-container">

            <span>{buttonName}</span>
            <span className="button-light-arrow-down" />
        </button>
    </div>
);

export default Button;