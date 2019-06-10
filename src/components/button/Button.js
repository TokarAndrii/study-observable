import React from 'react';

const Button = ({ className, text = "button text", btnType = "button", handleClick }) => (
    <button type={btnType} onClick={handleClick} className={className}>{text}</button>
);


export default Button;