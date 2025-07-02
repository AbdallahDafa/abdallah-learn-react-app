import { useState, useEffect } from "react";

import styleBtn from "../../styles/button_custom.module.css";
import styleText from "../../styles/text_custom.module.css";
import FloatingInput from "../../components/text_input/floating_label/FloatingLabelTextInput.module";
import UnberlineTextInput from "../../components/text_input/underline/UnberlineTextInput.module";
import InputValidator from "../../lib/validate/InputValidator";
import "./style.css"

export function RegisterScreen() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState("");
  const [myCar, setMyCar] = useState("");

  const handleSelectCar = (event) => {
    setMyCar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload 
    console.log("handleSubmit() - in with:", { name, email, password, myCar });

    /// set error message missed:  
    if ( ! InputValidator.isName( name) ) { setNameError('Username is required');   }  
    if (! InputValidator.isEmail(email )) { setEmailError('Email is required'); }  



  };

  return (
    <div
      style={{
        padding: "20px", 
        display: "block", 
        backgroundColor : "#FEECD0"
      }}  > 

        
        <h1 className={ styleText.w900 } style={ {
            textAlign: "center"
        }}>Register</h1> 
        <div style={ { margin: "30px" ,
         }}/>

 
        <FloatingInput
          id="username"
          label="Username"
          value={name}
          error={ nameError }
          onChange={(e) => {
          setNameError(""); //clear previous error
          setName(e.target.value); 
          }}
          //onChange={(e) => setName(e.target.value)}
        /> 
        <div style={ { margin: "15px"  }}/>
 


        <UnberlineTextInput
          id="email"
          label="email"
          value={email}
          error={ emailError }
          onChange={(e) => {
          setEmailError(""); //clear previous error
          setEmail(e.target.value); 
          }}
          //onChange={(e) => setName(e.target.value)}
        />
        <div style={ { margin: "15px"  }}/>


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={ { margin: "15px"  }}/>

        <select value={myCar} onChange={handleSelectCar}>
          <option value="">Select car</option>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <div style={ { margin: "15px"  }}/>

        <div>{ Timer() }</div>
        <div style={ { margin: "15px"  }}/>

        
        <button className={styleBtn.buttonPrimary} onClick={handleSubmit}>
          Register Now
        </button>
        <div />
    
    </div>
  );
}



function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    /// functions
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);



  },  [] );

  return <h1>I've rendered {count} times!</h1>;
}

 


