// Store all previously generated account numbers
const allAccountNumbers = [];

// Create a new unique account number
const newAccountNumber = () => {
  // Generate a random 8-digit account number
  const value = Math.floor(10000000 + Math.random() * 90000000);
  // Check if the generated number already exists in the array
  if (allAccountNumbers.includes(value)) {
    // Generate a new number if the number already exists
    return newAccountNumber();
  }
  // Save the unique account number
  allAccountNumbers.push(value);
  // Return the unique account number
  return value;
};

// Export the function as the default module
export default newAccountNumber;