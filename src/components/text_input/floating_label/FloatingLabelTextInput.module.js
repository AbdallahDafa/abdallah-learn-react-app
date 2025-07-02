import React from 'react';
import './style.css';
import { useState } from "react";

/***
 * ------------- example
 
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState('');
  
        <FloatingInput
          id="username"
          label="Username"
          value={name}
          error={ nameError }
          onChange={(e) => {
          setNameError(""); //clear previous error
          setName(e.target.value); 
          }}

 */
 
const FloatingInput = ({ label, value, onChange, type = "text", id , error }) => {

  const [valueUpdate, setValueUpdate] = useState(  "");

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    console.log("Input handleFocus");
    setIsFocused(true);
  };

  const handleUnFocus = () => {
    console.log("Input handleUnFocus");
    setIsFocused(false);
  };
 
  return (
    <div className="form-group">
      <input
        type={type}
        id={id}
        value={valueUpdate}
        onChange={ (e) => {
            const newValue = e.target.value;
            setValueUpdate( newValue);
            
            console.info("FloatingInput - onChange: ", { newValue,  isFocused });
 
        } }
        onFocus={handleFocus}
        onBlur={handleUnFocus}
        className="form-input"
        placeholder={label}
      />
      <div className="label-container-floated">
        <h1 className='label-text'>{  isFocused && label}</h1>
      </div>
 
      {error && <p className="error-text">{error}</p>}
      
    </div>
  );
};

export default FloatingInput;