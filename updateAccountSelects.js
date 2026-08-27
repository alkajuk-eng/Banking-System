function updateAccountSelects(accountArray,account, fullName, dob, accountNumber, sortCode) {
  // Check if an account holder with this name already exists
  const nameArray = accountArray.filter(
    item => item.accountHolder === account.accountHolder
  );

  // Add the account holder to the Full Name select if the name is not already present
  if (nameArray.length === 0) {
    const fullNameOption = document.createElement("option");
    fullNameOption.value = account.accountHolder;
    fullNameOption.textContent = account.accountHolder;
    fullName.appendChild(fullNameOption);
  }

  // Check if this date of birth already exists in the Date of Birth select
  const dobArray = accountArray.filter(
    item => item.birthDay === account.birthDay
  );

  // Add the date of birth to the Date of Birth select if it is not already present
  if (dobArray.length === 0) {
    const dobOption = document.createElement("option");
    dobOption.value = account.birthDay;
    dobOption.textContent = account.birthDay;
    dob.appendChild(dobOption);
  }

  // Create an option for the new account number
  const accountNumberOption = document.createElement("option");
  accountNumberOption.value = account.accountNumber;
  accountNumberOption.textContent = account.accountNumber;
  accountNumber.appendChild(accountNumberOption);

  // Create an option for the new sort code
  const sortCodeOption = document.createElement("option");
  sortCodeOption.value = account.sortCode;
  sortCodeOption.textContent = account.sortCode;
  sortCode.appendChild(sortCodeOption);

}

export default updateAccountSelects;