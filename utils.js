export const validateEmail = email => {
  // Email validation regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPassword = password => {
  if (password.length < 8) {
    return false;
  }

  //   if (!/[A-Z]/.test(password)) {
  //     return false;
  //   }

  //   if (!/[a-z]/.test(password)) {
  //     return false;
  //   }

  //   if (!/\d/.test(password)) {
  //     return false;
  //   }

  //   if (!/[^a-zA-Z0-9]/.test(password)) {
  //     return false;
  //   }

  return true;
};
