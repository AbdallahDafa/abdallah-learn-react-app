 
import './App.css'; 

 
import { useState } from 'react';
import { RegisterScreen } from './auth/register/page';


  function App(){
    return (
      <div>
          <div>{ RegisterScreen() }</div>
      </div>
    );
  }

 


export default App;
