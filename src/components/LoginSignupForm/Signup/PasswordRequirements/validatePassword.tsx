const validatePassword = (password: string) => {
  
  const isLengthSatisfied = (password.length >= 10 && password.length <= 20);
  const isCaseSatsified = (/[A-Z]/.test(password) && /[a-z]/.test(password));
  const isNumberSatisfied = (/[0-9]/.test(password));

  return {
    isLengthSatisfied,
    isCaseSatsified,
    isNumberSatisfied
  }
}

export default validatePassword;