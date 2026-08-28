// Refresh all account select elements
function refreshSelection(accountArray, fullName, dob, accountNumber, sortCode) {
  
  // Keep only the default option
  fullName.options.length = 1;
  // Create an array for unique account holder names
  const nameArray = [];
  // Find unique account holder names
  for (let i = 0; i < accountArray.length; i++) {
    if (!nameArray.includes(accountArray[i].accountHolder)) {
      nameArray.push(accountArray[i].accountHolder);
    }
  }
  // Add account holder names to the Full Name select
  nameArray.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    fullName.appendChild(option);
  });

  // Keep only the default option
  dob.options.length = 1;
  // Create an array for unique dates of birth
  const dobArray = [];
  // Find unique dates of birth
  for (let i = 0; i < accountArray.length; i++) {
    if (!dobArray.includes(accountArray[i].birthDay)) {
      dobArray.push(accountArray[i].birthDay);
    }
  }

  // Add dates of birth to the Date of Birth select
  dobArray.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    dob.appendChild(option);
  });

  // Keep only the default option
  accountNumber.options.length = 1;
  // Add account numbers to the Account Number select
  accountArray.forEach(item => {
    const option = document.createElement("option");
    option.value = item.accountNumber;
    option.textContent = item.accountNumber;
    accountNumber.appendChild(option);
  });

  // Keep only the default option
  sortCode.options.length = 1;
  // Add sort codes to the Sort Code select
  accountArray.forEach(item => {
    const option = document.createElement("option");
    option.value = item.sortCode;
    option.textContent = item.sortCode;
    sortCode.appendChild(option);
  });
}

// Export the refreshSelection function
export default refreshSelection;