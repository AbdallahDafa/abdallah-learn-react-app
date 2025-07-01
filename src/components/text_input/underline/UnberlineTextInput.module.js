import React from 'react';
import './style.css';

/***
 * ------------- example
 
 

 */
const UnberlineTextInput = ({ label, value, onChange, type = "text", id , error }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        id={id}
        value={value}
        onChange={ onChange }
        className="form-input"
        placeholder={ label }
      /> 
      {error && <p className="error-text">{error}</p>}
      
    </div>
  );
};

export default UnberlineTextInput;