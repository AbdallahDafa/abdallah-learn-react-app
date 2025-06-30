import { useState } from "react";

import styleBtn from "../../styles/button_custom.module.css";
import styleText from "../../styles/text_custom.module.css";
import styleInputfield from "../../styles/text_custom.module.css";

export function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [myCar, setMyCar] = useState("");

  const handleSelectCar = (event) => {
    setMyCar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    // alert(`name: ${name} /email: ${email}`)
    console.log("handleSubmit() - in with:", { name, email, password, myCar });
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "green",
        display: "inline-block",
      }}
    > 

        <h5 className={ styleText.w900 }>Register</h5> 
       <h1 className={ styleText.w900 } >test</h1>

        <input
          placeholder="enter name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div />
        <input
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div />
        <select value={myCar} onChange={handleSelectCar}>
          <option value="">Select car</option>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <div />
        <h5>selected: {myCar}</h5>
        <button className={styleBtn.buttonPrimary} onClick={handleSubmit}>
          Register Now
        </button>
        <div />
    
    </div>
  );
}
