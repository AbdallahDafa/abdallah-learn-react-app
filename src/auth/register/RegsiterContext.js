// RegisterContext.js
import { createContext, useReducer } from 'react';

 
export const MyContext = createContext();

const initialState = {
  name: '',
  nameError: '',
  password: '',
  passwordError: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD': {
        console.info("reducer() - update field: " + action.field + " /value: "  +  action.value );  
        console.info("reducer() - previous value: "  ,  state );
        return { ...state, [action.field]: action.value };
    }
      
    default:
      return state;
  }
}

export const RegisterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setField = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  return (
    <MyContext.Provider value={{ state, setField }}>
      {children}
    </MyContext.Provider>
  );
};
