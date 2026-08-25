// Import the BankAccount class
import bankAccount from "./bankAccount.js";

/* /////////////////////////////////////////////////////// */
// Get the date input element from the HTML
const birthDay = document.getElementById("birthDay");

// Create a Date object with today's date
const today = new Date();
console.log(today);

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
// and set it as the maximum allowed date in the input
birthDay.max = maxDate.toISOString().split("T")[0];
// Convert the minimum date to YYYY-MM-DD format
// and set it as the minimum allowed date in the input
birthDay.min = minDate.toISOString().split("T")[0];

// Display the maximum allowed date in the console
console.log(birthDay.max);

// Display the minimum allowed date in the console
console.log(birthDay.min);

/* /////////////////////////////////////////////////////// */



// Get the account form
const accountForm = document.getElementById("accountForm");

// Handle form submission
accountForm.addEventListener("submit", createAccount);

// Create a new account
function createAccount(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get values from the form
  const accountHolder = document.getElementById("accountHolder").value;
  const birthDay = document.getElementById("birthDay").value;
  const initialDepositAmount = document.getElementById("initialDepositAmount").value;

  const allAccountNumber=[];

  const newAccountNumber=()=>{

     const value = Math.floor(10000000 + Math.random() * 90000000);

      const result =allAccountNumber.filter(item=>item===value);
      if(result.length){
        return newAccountNumber();
      }else{
        allAccountNumber.push(value);
        return value;
      }
  }

  const accountNumber = newAccountNumber();



  // Create a new bank account object
  const account = new bankAccount(
    accountHolder,
    birthDay,
    accountNumber,
    "20-12-34",
    Number(initialDepositAmount)
  );

  console.log(account);


  console.log("Account created");
}
















