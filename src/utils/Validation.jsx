export const nameValidationCheck = (name) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  if (!isNameValid)
    return "Start with a capital, use only letters and basic punctuation.";
  return null;
};

export const emailValidationCheck = (email) => {
  const isEmailValid = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,4}$/g.test(email);
  if (!isEmailValid) return "Invalid Email ID";
  return null;
};

export const passwordValidationCheck = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) return "Invalid Password";
  return null;
};

export const confirmPasswordCheck = (password, confirmPassword) => {
  if (password !== confirmPassword) return "Passwords do not match";
  return null;
};
