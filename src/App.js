 
import './App.css'; 

import { nameUser, ageUser, message } from "./person.js"; 

  function App(){
    return (
      <div>
        <h1>Welcome to App.js File</h1> 
          <h3>{ nameUser }</h3> 
          <h3>{ message() }</h3> 
      </div>
    );
  }

 
   

export default App;
