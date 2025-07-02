import React from 'react';
import  style from  "./FloatingLabelTextInput.module.css";
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
    <div className={style.formGroup}>
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
        className={ style.formInput  }
        placeholder={label}
      />
      <div className={style.labelContainer}>
        <h1 className={style.labelText}>{  (  valueUpdate  )  && label}</h1>
      </div>
 
      {error && <p className={ style.errorText}  >{error}</p>}
      
    </div>
  );
};

export default FloatingInput;