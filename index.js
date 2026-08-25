// Import the BankAccount class
import bankAccount from "./bankAccount.js";

// Import the function for setting birth date limits
import setBirthDateLimits from "./birthDate.js";

// Import the function for generating a unique account number
import newAccountNumber from "./newAccountNumber.js";

/* /////////////////////////////////////////////////////// */

// Get the account form from the HTML
const accountForm = document.getElementById("accountForm");

// Get the date of birth input from the HTML
const birthDayRange = document.getElementById("birthDay");
// Set the minimum and maximum allowed birth dates
setBirthDateLimits(birthDayRange);

// Store all created bank account objects
const accountArray = [];

// Handle form submission
accountForm.addEventListener("submit", createAccount);

/* /////////////////////////////////////////////////////// */

// Create a new bank account
function createAccount(event) {

  // Prevent the form from reloading the page
  event.preventDefault();

  // Get the account holder's name from the form
  const accountHolder =
    document.getElementById("accountHolder").value;

  // Get the account holder's date of birth from the form
  const birthDay =
    document.getElementById("birthDay").value;

  // Get the initial deposit amount from the form
  const initialDepositAmount =
    document.getElementById("initialDepositAmount").value;

  // Generate a unique account number
  const accountNumber = newAccountNumber();



  
  // Create a new bank account object
  const account = new bankAccount(
    accountHolder,
    birthDay,
    accountNumber,
    "20-12-34",
    Number(initialDepositAmount),
  );

  // Add the new account object to the account array
  accountArray.push(account);

  // Display all created accounts in the console
  console.log(accountArray);

  // Reset the form after creating the account
  accountForm.reset();
}