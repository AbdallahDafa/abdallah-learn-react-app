import { createContext, useState } from 'react';

export const MyContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [form, _setForm] = useState({
    name: "",
    nameError: "",
    password: "",
    passwordError: "",
  });

  
  const setForm = (field, value) => {
    console.info("setForm() - field: " + field + " value: " + value );
    _setForm(prev => ({ ...prev, [field]: value }));
  };


  return (
    <MyContext.Provider value={{ form, setForm}}>
      {children}
    </MyContext.Provider>
  );
};