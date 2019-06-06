import React from 'react';

const Input = ({ className, labelTxt, inputType = 'text', inputPlaceHolder,
    inputName, inputValue, handleChange = () => null }) => (
        <label>
            <span>{labelTxt}</span>
            <input type={inputType} placeholder={inputPlaceHolder} name={inputName}
                value={inputValue} onChange={handleChange}></input>
        </label>
    );

export default Input;
