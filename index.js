// Import required classes and functions

// Import the BankAccount class
import BankAccount from "./bankAccount.js";
// Import the function for setting birth date limits
import setBirthDateLimits from "./birthDate.js";
// Import the function for generating a unique account number
import newAccountNumber from "./newAccountNumber.js";
// Import the function for generating a unique sort code
import newSortCode from "./newSortCode.js";
// Import the function for displaying account information
import displayAccountInformation from "./accountDisplay.js";
// Import the function for refreshing the account select elements
import refreshSelection from "./refreshSelection.js";
// Import the function for deleting a bank account
import deleteAccount from "./deleteAccount.js";

/* ////////////////////////////////////////////////////////////////// */

// Get form elements from the HTML

// Get the account form from the HTML
const accountForm = document.getElementById("accountForm");
// Get the account holder input from the HTML
const accountHolder = document.getElementById("accountHolder");
// Get the date of birth input from the HTML
const birthDay = document.getElementById("birthDay");
// Set the minimum and maximum allowed birth dates
setBirthDateLimits(birthDay);
// Get the initial deposit amount input from the HTML
const initialDepositAmount = document.getElementById("initialDepositAmount");

/* ////////////////////////////////////////////////////////////////// */

// Listen for the form submit event
accountForm.addEventListener("submit", createAccount);

/* ////////////////////////////////////////////////////////////////// */

// Get selection elements from the HTML

// Get the Full Name select element
const fullName = document.getElementById("fullName");
// Get the Date of Birth select element
const dob = document.getElementById("dob");
// Get the Account Number select element
const accountNumber = document.getElementById("accountNumber");
// Get the Sort Code select element
const sortCode = document.getElementById("sortCode");

/* ////////////////////////////////////////////////////////////////// */

// Get the main account display section
const accountInformation = document.getElementById("accountInformation");

/* ////////////////////////////////////////////////////////////////// */

// Store all created bank account objects
let accountsArray = [];

// Create a new bank account
function createAccount(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();
  // Generate a unique account number
  const uniqueAccountNumber = newAccountNumber();
  // Generate a unique sort code
  const uniqueSortCode = newSortCode();

  // Create a new bank account object
  const account = new BankAccount(
    accountHolder.value,
    birthDay.value,
    uniqueAccountNumber,
    uniqueSortCode,
    Number(initialDepositAmount.value),
  );

  // Add the new account object to the accounts array
  accountsArray.push(account);

  // Refresh the account select elements
  refreshSelection(accountsArray, fullName, dob, accountNumber, sortCode);

  // Reset the form fields
  accountForm.reset();
}

/* ////////////////////////////////////////////////////////////////// */

// Handle changes to the Full Name select
fullName.addEventListener("change", () => {
  // Reset the other select elements
  dob.selectedIndex = 0;
  accountNumber.selectedIndex = 0;
  sortCode.selectedIndex = 0;

  // Find accounts matching the selected account holder
  const result = accountsArray.filter(
    item => item.accountHolder === fullName.value);

  // Display the matching account information
  displayAccountInformation(
    result,
    accountInformation,
    accountsArray,
    fullName,
    dob,
    accountNumber,
    sortCode,
    deleteAccount,
    refreshSelection
  );
});

/* ////////////////////////////////////////////////////////////////// */

// Handle changes to the Date of Birth select
dob.addEventListener("change", () => {
  // Reset the other select elements
  fullName.selectedIndex = 0;
  accountNumber.selectedIndex = 0;
  sortCode.selectedIndex = 0;

  // Find accounts matching the selected date of birth
  const result = accountsArray.filter(
    item => item.birthDay === dob.value
  );

  // Display the matching account information
  displayAccountInformation(
    result,
    accountInformation,
    accountsArray,
    fullName,
    dob,
    accountNumber,
    sortCode,
    deleteAccount,
    refreshSelection
  );
});

/* ////////////////////////////////////////////////////////////////// */

// Handle changes to the Account Number select
accountNumber.addEventListener("change", () => {
  // Reset the other select elements
  fullName.selectedIndex = 0;
  dob.selectedIndex = 0;
  sortCode.selectedIndex = 0;

  // Find the account matching the selected account number
  // Convert the account number to a string for comparison
  const result = accountsArray.filter(
    item => String(item.accountNumber) === accountNumber.value
  );

  // Display the matching account information
  displayAccountInformation(
    result,
    accountInformation,
    accountsArray,
    fullName,
    dob,
    accountNumber,
    sortCode,
    deleteAccount,
    refreshSelection
  );
});

/* ////////////////////////////////////////////////////////////////// */

// Handle changes to the Sort Code select
sortCode.addEventListener("change", () => {
  // Reset the other select elements
  fullName.selectedIndex = 0;
  dob.selectedIndex = 0;
  accountNumber.selectedIndex = 0;

  // Find the account matching the selected sort code
  const result = accountsArray.filter(
    item => item.sortCode === sortCode.value
  );

  // Display the matching account information
  displayAccountInformation(
    result,
    accountInformation,
    accountsArray,
    fullName,
    dob,
    accountNumber,
    sortCode,
    deleteAccount,
    refreshSelection
  );
});






