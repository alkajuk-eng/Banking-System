// Store all previously generated account numbers
const allAccountNumber = [];

// Create a new unique account number
const newAccountNumber = () => {

  // Generate a random 8-digit account number
  const value = Math.floor(10000000 + Math.random() * 90000000);

  // Check if the generated number already exists in the array
  const result = allAccountNumber.filter((item) => item === value);

  // If the number already exists, generate a new number
  if (result.length) {
    return newAccountNumber();

  // If the number is unique, save it and return it
  } else {
    allAccountNumber.push(value);
    return value;
  }
};

// Export the function as the default module
export default newAccountNumber;