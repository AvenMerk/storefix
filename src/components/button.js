import React from 'react';

const Button = ({buttonName, onClickFunction}) => (
    <div>
        <button onClick={onClickFunction}>{buttonName}</button>
    </div>
);

export default Button;