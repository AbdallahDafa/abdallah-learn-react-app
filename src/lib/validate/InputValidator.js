
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

  // Optional: You can add a method to return an error message
  static getErrorMessage(type, value) {
    switch (type) {
      case 'email':
        return this.isEmail(value) ? '' : 'Invalid email address';
      case 'name':
        return this.isName(value) ? '' : 'Name must contain only letters';
      case 'fullName':
        return this.isFullName(value) ? '' : 'Enter full name (first and last)';
      case 'phone':
        return this.isPhone(value) ? '' : 'Invalid phone number';
      default:
        return 'Invalid input';
    }
  }
}

export default InputValidator;