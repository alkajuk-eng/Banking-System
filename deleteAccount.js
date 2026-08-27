// Delete a bank account
function deleteAccount(item, accountArray, fullName, dob, accountNumber, sortCode, accountInformation, refreshSelection) {
 
  // Find the position of the selected account
  const index = accountArray.indexOf(item);

  // Remove the account from the array
  accountArray.splice(index, 1);

  // Refresh all account select elements
  refreshSelection( accountArray, fullName, dob, accountNumber, sortCode);

  // Clear the account information display
  accountInformation.innerHTML = "";
}

// Export the deleteAccount function
export default deleteAccount;