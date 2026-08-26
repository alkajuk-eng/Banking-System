// Store all previously generated Sort Codes
const allASortCode = [];

// Create a new unique Sort Code
const newSortCode = () => {

  // Generate a random 6-digit number
  const value = Math.floor(100000 + Math.random() * 900000);

  // Convert the number to a string
  // This allows us to access each digit using its index
  const valueString = String(value);

  // Create an empty string where the formatted Sort Code will be stored
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
  const result = allASortCode.filter((item) => item === string);

  // If the Sort Code already exists, generate a new one
  if (result.length) {
    return newSortCode();

  // If the Sort Code is unique, save it and return it
  } else {

    // Store the new Sort Code in the array
    allASortCode.push(string);

    // Return the new unique Sort Code
    return string;
  }
};

// Export the function as the default module
export default newSortCode;