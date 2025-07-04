import { useState,   createContext, useContext} from "react";

import styleBtn from "../../styles/button_custom.module.css";
import styleText from "../../styles/text_custom.module.css";
import FloatingInput from "../../components/text_input/floating_label/FloatingLabelTextInput.module";
import UnberlineTextInput from "../../components/text_input/underline/UnberlineTextInput.module";
import InputValidator from "../../lib/validate/InputValidator";
import "./style.css"
import { RegisterProvider , MyContext} from "./RegsiterContext";
 
 

export function RegisterScreen() {
  
  return (
    <RegisterProvider>
      <BodyRegister/>
    </RegisterProvider>
  );
}



const BodyRegister = () => {
  const { state, setField } = useContext(MyContext);

  
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload 

    console.log("handleSubmit() - in with:", state );

  //   var name =  form["name"] ;
  //   console.log("handleSubmit() - name:",  { name } );
    /// set error message missed:  
   if ( ! InputValidator.isName( state.name ) ) {
      setField ('nameError',  'Username is required') ;   
    }   

       
    const isValidPassword = InputValidator.validatePasswordWeek( state.password  ); 
    if (!isValidPassword) {
      setField ('passwordError',     "Password required more than or equal 8 Character" ) ;    
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


        <UnberlineTextInput
          id="username"
          label="username"
          value={state.name}
          error={ state.nameError  }
          onChange={(e) => {
            setField("nameError", "" );  //clear previous error
            setField("name", e.target.value); 
          }} 
        />
        <div style={ { margin: "15px"  }}/>


        <input
          type="password"
          placeholder="Password" 
          onChange={(e) =>  {
            console.info("onChange password: " + e.target.value);
            console.info("onChange previous passwordError: " + state.passwordError );
            setField( "passwordError" ,  "");
            setField( "password" , e.target.value);
          }
          }
        />
        { state.passwordError &&  <div> <span>{state.passwordError}</span> </div>  }
        <div style={ { margin: "15px"  }}/>

   

 
      <button className={styleBtn.buttonPrimary} onClick={handleSubmit}>
          Register Now
        </button>
        <div />


    </div>
  );
};


