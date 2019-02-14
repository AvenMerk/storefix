import React from 'react';

const Button = ({buttonName, onClickFunction}) => (
    <div>
        <button onClick={onClickFunction} className="button">{buttonName}</button>
    </div>
);

export default Button;