
class InputValidator {
  static isEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static isName(name) {
    const regex = /^[A-Za-z]{2,}$/;
    return regex.test(name.trim());
  }
 
  static isFullName(fullName) {
    const regex = /^[A-Za-z]{2,}(\s[A-Za-z]{2,})+$/;
    return regex.test(fullName.trim());
  }

  static isPhone(phone) {
    const regex = /^\+?[0-9]{10,15}$/;
    return regex.test(phone.trim());
  }


  /**
   *  
   * usage :
   * 
   
  const { isValid, errors } = validatePassword("Test123");
  
  if (!isValid) {
    console.log("Invalid password:", errors);
  } else {
    console.log("Password is valid.");
  }
   */
  static validatePassword(password) {
  console.log("validatePassword() - password",  {password} );
  const errors = [];

  if( password === null ||  password === "" ) {
    errors.push("Password is required.");

  } else if (!password) {
    errors.push("Password is required.");
  } else  if (password.length < 8) {
    errors.push("Password must be at least 8 characters.");
  } else  if (!/[A-Z]/.test(password)) {
    errors.push("Password must include at least one uppercase letter.");
  }  else  if (!/[a-z]/.test(password)) {
    errors.push("Password must include at least one lowercase letter.");
  } else if (!/[0-9]/.test(password)) {
    errors.push("Password must include at least one number.");
  } else if (!/[!@#$%^&*]/.test(password)) {
    errors.push("Password must include at least one special character (!@#$%^&*).");
  }
  return {
    isValid: errors.length === 0,
    errors
  };
} 



}

export default InputValidator;