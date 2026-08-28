// Set the minimum and maximum allowed dates for the date of birth input
function setBirthDateLimits(birthDay) {
  // Get today's date
  const today = new Date();
  // Create a copy of today's date
  const maxDate = new Date(today);
  // This means the person must be at least 10 years old
  maxDate.setFullYear(today.getFullYear() - 10);

  // Create another copy of today's date
  const minDate = new Date(today);
  // This limits the maximum age to 100 years
  minDate.setFullYear(today.getFullYear() - 100);

  // Set the maximum date in YYYY-MM-DD format
  birthDay.max = maxDate.toISOString().split("T")[0];
  // Set the minimum date in YYYY-MM-DD format
  birthDay.min = minDate.toISOString().split("T")[0];
}

// Export the function as the default module
export default setBirthDateLimits;