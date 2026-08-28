// Delete a bank account
function deleteAccount(item, accountsArray, fullName, dob, accountNumber, sortCode, accountInformation, refreshSelection) {
 
  // Find the position of the selected account
  const index = accountsArray.indexOf(item);
  // Remove the account from the array
  accountsArray.splice(index, 1);
  // Refresh all account select elements
  refreshSelection( accountsArray, fullName, dob, accountNumber, sortCode);
  // Clear the account information display
  accountInformation.innerHTML = "";
}

// Export the deleteAccount function
export default deleteAccount;