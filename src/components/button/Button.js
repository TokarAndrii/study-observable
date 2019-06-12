import React from 'react';

const Button = ({ className, text = "button text", btnType = "button", onClick }) => (
    <button type={btnType} onClick={onClick} className={className}>{text}</button>
);


export default Button;