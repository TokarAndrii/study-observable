import React from 'react';

const Input = ({ className, labelTxt, inputType = 'text', inputPlaceHolder,
    name, inputValue, handleChange = () => null }) => (
        <label className={className}>
            <span>{labelTxt}</span>
            <input type={inputType} placeholder={inputPlaceHolder} name={name}
                value={inputValue} onChange={handleChange}></input>
        </label>
    );

export default Input;
