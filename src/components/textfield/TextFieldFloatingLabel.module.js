import React from 'react';
import './FloatingInput.css';

const FloatingInput = ({ label, value, onChange, type = "text", id , error }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="form-input"
        placeholder=""
      />
      <label htmlFor={id} className="form-label">{label}</label>

      {error && <p className="error-text">{error}</p>}
      
    </div>
  );
};

export default FloatingInput;