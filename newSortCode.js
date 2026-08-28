// Store all previously generated Sort Codes
const allSortCodes = [];

// Create a new unique Sort Code
const newSortCode = () => {
  // Generate a random 6-digit number
  const value = Math.floor(100000 + Math.random() * 900000);
  // Convert the number to a string
  const valueString = String(value);
  // Create an empty string for the formatted Sort Code
  let string = "";
  // Loop through each digit of the generated number
  for (let i = 0; i < valueString.length; i++) {
    // Add a hyphen after the second and fourth digits
    if (i === 2 || i === 4) {
      string += "-";
    }
    // Add the current digit to the Sort Code string
    string += valueString[i];
  }

  // Check if the generated Sort Code already exists in the array
  if (allSortCodes.includes(string)) {
    // Generate a new Sort Code if it already exists
    return newSortCode();
  }
  // Save the unique Sort Code
  allSortCodes.push(string);
  // Return the unique Sort Code
  return string;
};

// Export the function as the default module
export default newSortCode;