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
/* const accountDisplay = document.getElementById("accountDisplay"); */

const accountInformation = document.getElementById("accountInformation");


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

  /* ////////////////////////////////////////////////////// */

  accountInformation.innerHTML = "";

  result.forEach(item => {
    
    const holderDiv=document.createElement("div");
    const holderLabel=document.createElement("label");
    holderLabel.textContent="Full Name:";
    const holderSpan= document.createElement("span");
    holderSpan.textContent=item.accountHolder;
    holderDiv.appendChild(holderLabel);
    holderDiv.appendChild(holderSpan);
    accountInformation.appendChild(holderDiv);

    const dobDiv=document.createElement("div");
    const dobLabel=document.createElement("label");
    dobLabel.textContent="Date of Birth:";
    const dobSpan= document.createElement("span");
    dobSpan.textContent=item.birthDay;
    dobDiv.appendChild(dobLabel);
    dobDiv.appendChild(dobSpan);
    accountInformation.appendChild(dobDiv);

    const accountDiv=document.createElement("div");
    const accountLabel=document.createElement("label");
    accountLabel.textContent="Account Number:";
    const accountSpan= document.createElement("span");
    accountSpan.textContent=item.accountNumber;
    accountDiv.appendChild(accountLabel);
    accountDiv.appendChild(accountSpan);
    accountInformation.appendChild(accountDiv);

    const sortDiv=document.createElement("div");
    const sortLabel=document.createElement("label");
    sortLabel.textContent="Sort Code:";
    const sortSpan= document.createElement("span");
    sortSpan.textContent=item.sortCode;
    sortDiv.appendChild(sortLabel);
    sortDiv.appendChild(sortSpan);
    accountInformation.appendChild(sortDiv);


    const balanceDiv=document.createElement("div");
    const balanceLabel=document.createElement("label");
    balanceLabel.textContent="Balance:";
    const balanceSpan= document.createElement("span");
    balanceSpan.textContent="";
    balanceDiv.appendChild(balanceLabel);
    balanceDiv.appendChild(balanceSpan);
    accountInformation.appendChild(balanceDiv);
    
    const operationDiv = document.createElement("div");
    const operationLabel=document.createElement("label");
    operationLabel.textContent="Operation";
    const operationSelect = document.createElement("select");
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select Operation";
    defaultOption.disabled = true;
    defaultOption.selected = true;  
    const depositOption = document.createElement("option");
    depositOption.value = "deposit";
    depositOption.textContent = "Deposit";
    const withdrawOption = document.createElement("option");
    withdrawOption.value = "withdraw";
    withdrawOption.textContent = "Withdraw";
    const checkBalanceOption = document.createElement("option");
    checkBalanceOption.value = "checkBalance";
    checkBalanceOption.textContent = "Check Balance";
    operationSelect.appendChild(defaultOption);
    operationSelect.appendChild(depositOption);
    operationSelect.appendChild(withdrawOption);
    operationSelect.appendChild(checkBalanceOption);
    operationDiv.appendChild(operationLabel);
    operationDiv.appendChild(operationSelect);
    accountInformation.appendChild(operationDiv);

    const operationAmountDiv=document.createElement("div");
    const operationAmountLabel=document.createElement("label");
    operationAmountLabel.textContent="Operation Amount:";
    const operationAmountInput = document.createElement("input");
    operationAmountInput.classList.add("operation-amount");
    operationAmountInput.type = "number";
    operationAmountInput.classList.add("account-input");
    operationAmountInput.placeholder = "Enter amount...";
    operationAmountInput.min = "0";
    operationAmountInput.disabled = true;
    operationAmountDiv.appendChild(operationAmountLabel);
    operationAmountDiv.appendChild(operationAmountInput);
    accountInformation.appendChild(operationAmountDiv);

    operationSelect.addEventListener("change", () => {
      operationAmountInput.value="";
      if (
        operationSelect.value === "deposit" || operationSelect.value === "withdraw"
      ) {
        operationAmountInput.disabled = false;
      } else {
        operationAmountInput.disabled = true;
        operationAmountInput.value = "";
      }
    });

    const actionButton = document.createElement("button");
    actionButton.classList.add("action-button");
    actionButton.type = "button";
    actionButton.textContent = "Action";
    accountInformation.appendChild(actionButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    accountInformation.appendChild(removeButton);

/* //////////////////// */

    actionButton.addEventListener("click", () => {

        const amount = Number(operationAmountInput.value);

          if (operationSelect.value === "deposit") {

            const success = item.deposit(amount);
            if (success) {
              balanceSpan.textContent = `£${item.balance}`;
            }
            operationAmountInput.value="";
          } 
          else if (operationSelect.value === "withdraw") {
            const success = item.withdraw(amount);
            if (success) {
              balanceSpan.textContent = `£${item.balance}`;
            }
            operationAmountInput.value="";
          } 
          else if (operationSelect.value === "checkBalance") {
            item.checkBalance();
            balanceSpan.textContent = `£${item.balance}`;
          }
        });
  });
}








// Listen for changes in the Full Name select
dob.addEventListener("change", resetDOB);

// Reset all other account selects to their default options
function resetDOB() {
  fullName.selectedIndex = 0;
  accountNumber.selectedIndex = 0;
  sortCode.selectedIndex = 0;

  
  
}

// Listen for changes in the Full Name select
accountNumber.addEventListener("change", resetAccount);

// Reset all other account selects to their default options
function resetAccount() {
  fullName.selectedIndex = 0;
  dob.selectedIndex = 0;
  sortCode.selectedIndex = 0;
}

// Listen for changes in the Full Name select
sortCode.addEventListener("change", resetSortCode);

// Reset all other account selects to their default options
function resetSortCode() {
  fullName.selectedIndex = 0;
  dob.selectedIndex = 0;
  accountNumber.selectedIndex = 0;

  
}



