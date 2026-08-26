// Import the BankAccount class
import bankAccount from "./bankAccount.js";
// Import the function for setting birth date limits
import setBirthDateLimits from "./birthDate.js";
// Import the function for generating a unique account number
import newAccountNumber from "./newAccountNumber.js";
// Import the function for generating a unique sort code
import newSortCode from "./newSortCode.js";


/* ///////////////////////////////////////////////////////////////////////////*/

// Get the account form from the HTML
const accountForm = document.getElementById("accountForm");

// Get the account holder input from the HTML
const accountHolder = document.getElementById("accountHolder");

// Get the date of birth input from the HTML
const birthDayRange = document.getElementById("birthDay");
// Set the minimum and maximum allowed birth dates
setBirthDateLimits(birthDayRange);

// Get the amount input from the HTML
const initialDepositAmount = document.getElementById("initialDepositAmount");

// Listen for the form submit event
accountForm.addEventListener("submit", createAccount);

/* ///////////////////////////////////////////////////////////////////////////*/

// Get the Full Name select element
const fullName = document.getElementById("fullName");

// Get the Date of Birth select element
const dob = document.getElementById("dob");

// Get the Account Number select element
const accountNumber = document.getElementById("accountNumber");

// Get the Sort Code select element
const sortCode = document.getElementById("sortCode");


/* ///////////////////////////////////////////////////////////////////////////*/

// Get the main account display section
const accountDisplay = document.getElementById("accountDisplay");

const accountInformation = document.getElementById("account-information");
/* ///////////////////////////////////////////////////////////////////////////*/




/* const operation = document.getElementById("operation");

const operationAmountContainer = document.getElementById(
  "operationAmountContainer"
);

const operationAmount = document.getElementById("operationAmount");

const actionButton = document.getElementById("actionButton");
const removeAccountButton = document.getElementById(
  "removeAccountButton"
); */

/* /////////////////////////////////////////////////////// */




// Store all created bank account objects
const accountArray = [];

// Create a new bank account
function createAccount(event) {
  event.preventDefault();

  const accountHolder = document.getElementById("accountHolder").value;
  const birthDay = document.getElementById("birthDay").value;
  const initialDepositAmount = document.getElementById("initialDepositAmount").value;
  const uniqueAccountNumber = newAccountNumber();
  const uniqueSortCode = newSortCode();

  // Create a new bank account object
  const account = new bankAccount(
    accountHolder,
    birthDay,
    uniqueAccountNumber,
    uniqueSortCode,
    Number(initialDepositAmount),
  );

  /* ///////////////////////////////////////////////////// */

  const nameArray=accountArray.filter(item =>item.accountHolder===account.accountHolder);

  if (nameArray.length===0){
    const fullNameOption = document.createElement("option");
    fullNameOption.value = account.accountHolder;
    fullNameOption.textContent = account.accountHolder;
    fullName.appendChild(fullNameOption);
  }

  const dobArray=accountArray.filter(item =>item.birthDay===account.birthDay);

  if (dobArray.length===0){
    const dobOption = document.createElement("option");
    dobOption.value = account.birthDay;
    dobOption.textContent = account.birthDay;
    dob.appendChild(dobOption);
  }

  const accountNumberOption = document.createElement("option");
  accountNumberOption.value = account.accountNumber;
  accountNumberOption.textContent = account.accountNumber;
  accountNumber.appendChild(accountNumberOption);

  const sortCodeOption = document.createElement("option");
  sortCodeOption.value = account.sortCode;
  sortCodeOption.textContent = account.sortCode;
  sortCode.appendChild(sortCodeOption);

  accountArray.push(account);
  console.log(accountArray);
  accountForm.reset();
}


// Listen for changes in the Full Name select
fullName.addEventListener("change", resetFullName);

// Reset all other account selects to their default options
function resetFullName() {
  dob.selectedIndex = 0;
  accountNumber.selectedIndex = 0;
  sortCode.selectedIndex = 0;

  const result = accountArray.filter(item => item.accountHolder === fullName.value);


  accountInformation.innerHTML = "";

  result.forEach(item => {
    
    

    const holderLabel= document.createElement("label");
    holderLabel.textContent="Full Name";

    fullNameLabel.textContent=result.accountHolder;

    accountDisplay.appendChild
  });
}














// Listen for changes in the Full Name select
dob.addEventListener("change", resetExcludingDOB);

// Reset all other account selects to their default options
function resetExcludingDOB() {
  fullName.selectedIndex = 0;
  accountNumber.selectedIndex = 0;
  sortCode.selectedIndex = 0;

  const result = accountArray.filter(item => item.birthDay === dob.value);
  // Clear previous displayed accounts
  accountDisplay.innerHTML = "";

  // Display all matching accounts
  result.forEach(item => {

    // Create a new element for the account
    const accountInfo = document.createElement("div");

    // Display account information
    accountInfo.textContent =
      `${item.accountHolder} | ${item.birthDay} | ${item.accountNumber} | ${item.sortCode} | £${item.balance}`;

    // Add the account to the display section
    accountDisplay.appendChild(accountInfo);
  });
}

// Listen for changes in the Full Name select
accountNumber.addEventListener("change", resetExcludingaccountNumber);

// Reset all other account selects to their default options
function resetExcludingaccountNumber() {
  fullName.selectedIndex = 0;
  dob.selectedIndex = 0;
  sortCode.selectedIndex = 0;

  const result = accountArray.filter(item => item.accountNumber === accountNumber.value);
  // Clear previous displayed accounts
  accountDisplay.innerHTML = "";

  // Display all matching accounts
  result.forEach(item => {

    // Create a new element for the account
    const accountInfo = document.createElement("div");

    // Display account information
    accountInfo.textContent =
      `${item.accountHolder} | ${item.birthDay} | ${item.accountNumber} | ${item.sortCode} | £${item.balance}`;

    // Add the account to the display section
    accountDisplay.appendChild(accountInfo);
  });
}

// Listen for changes in the Full Name select
sortCode.addEventListener("change", resetExcludingsortCode);

// Reset all other account selects to their default options
function resetExcludingsortCode() {
  fullName.selectedIndex = 0;
  dob.selectedIndex = 0;
  accountNumber.selectedIndex = 0;

  const result = accountArray.filter(item => item.sortCode === sortCode.value);
  // Clear previous displayed accounts
  accountDisplay.innerHTML = "";

  // Display all matching accounts
  result.forEach(item => {

    // Create a new element for the account
    const accountInfo = document.createElement("div");

    // Display account information
    accountInfo.textContent =
      `${item.accountHolder} | ${item.birthDay} | ${item.accountNumber} | ${item.sortCode} | £${item.balance}`;

    // Add the account to the display section
    accountDisplay.appendChild(accountInfo);
  });
}

/* /////////////////////////////////////////////////////// */

