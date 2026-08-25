// Set the minimum and maximum allowed dates for the date of birth input
function setBirthDateLimits(birthDay) {

  // Get today's date
  const today = new Date();

  // Create a copy of today's date
  const maxDate = new Date(today);

  // Set the maximum date to 10 years ago
  // This means the person must be at least 10 years old
  maxDate.setFullYear(today.getFullYear() - 10);

  // Create another copy of today's date
  const minDate = new Date(today);

  // Set the minimum date to 100 years ago
  // This limits the maximum possible age to 100 years
  minDate.setFullYear(today.getFullYear() - 100);

  // Convert the maximum date to YYYY-MM-DD format
  // and set it as the maximum allowed date
  birthDay.max = maxDate.toISOString().split("T")[0];

  // Convert the minimum date to YYYY-MM-DD format
  // and set it as the minimum allowed date
  birthDay.min = minDate.toISOString().split("T")[0];
}

// Export the function as the default module
export default setBirthDateLimits;