import { useState } from "react";

import styleBtn from "../../styles/button_custom.module.css";
import styleText from "../../styles/text_custom.module.css";
import FloatingInput from "../../components/textfield/floating_label/TextFieldFloatingLabel.module";


export function RegisterScreen() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [myCar, setMyCar] = useState("");

  const handleSelectCar = (event) => {
    setMyCar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload 
    console.log("handleSubmit() - in with:", { name, email, password, myCar });

    /// validate : name 
    if (!name.trim()) {
          setNameError('Username is required');
          return;
        } else {
          setNameError('');
    }


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


        <input
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        
        <button className={styleBtn.buttonPrimary} onClick={handleSubmit}>
          Register Now
        </button>
        <div />
    
    </div>
  );
}
