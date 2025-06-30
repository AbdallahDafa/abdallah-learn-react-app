 
import './App.css'; 

import { nameUser, ageUser, message } from "./person.js"; 

import { useState } from 'react';


  function App(){

 

    return (
      <div>
        <h1>Welcome to App.js File</h1> 
          <div>{ FormLogin() }</div>
      </div>
    );
  }

 

function FormLogin() {
  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); ; // prevent page reload
    // alert(`name: ${name} /email: ${email}`)
      console.log('handleSubmit() - in with:', { name, email, password });
  }

  
  return (
   <form onSubmit={handleSubmit}>
      <label>Register:
       <div/>

        <input
          placeholder='enter name'
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div/>

        <input
          placeholder='enter email'
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <div/>

        <button
         type="submit" 
         >Register Now</button>
        <div/>

      </label>
    </form>
  )
}



export default App;
