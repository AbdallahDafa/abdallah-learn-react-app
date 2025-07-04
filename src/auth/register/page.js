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


function BodyRegister() {
  
  const {form,setForm}  = useContext( MyContext); 


  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload 

    console.log("handleSubmit() - in with:", form );

  //   var name =  form["name"] ;
  //   console.log("handleSubmit() - name:",  { name } );
    /// set error message missed:  
   if ( ! InputValidator.isName( form.name ) ) {
      setForm ('nameError',  'Username is required') ;   
    }   

       
    const { isValidPassword, errors } = InputValidator.validatePassword( form.password  );
    console.log("handleSubmit() - isValidPassword",  {isValidPassword} );
    if (!isValidPassword) {
      setForm ('passwordError',   errors[0] ) ;   
      // setPasswordError('password is required ' +  errors[0]);   
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
          value={form.name}
          error={ form.nameError  }
          onChange={(e) => {
            setForm("nameError", "" );  //clear previous error
            setForm("name", e.target.value); 
          }} 
        />
        <div style={ { margin: "15px"  }}/>


        <input
          type="password"
          placeholder="Password" 
          onChange={(e) =>  {
            console.info("onChange password: " + e.target.value);
            setForm( "passswordError" ,  "");
            setForm( "passsword" , e.target.value);
          }
          }
        />
        { form.passwordError &&  <div> <span>{form.passwordError}</span> </div>  }
        <div style={ { margin: "15px"  }}/>

   
        
        <button className={styleBtn.buttonPrimary} onClick={handleSubmit}>
          Register Now
        </button>
        <div />
    
    </div>
  ); 

}
 
 

