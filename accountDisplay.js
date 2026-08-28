// Display account information and account operation controls
function displayAccountInformation(
  result,
  accountInformation,
  accountsArray,
  fullName,
  dob,
  accountNumber,
  sortCode,
  deleteAccount,
  refreshSelection
) {

  // Clear the previous account information
  accountInformation.innerHTML = "";

  // Display information for each matching account
  result.forEach(item => {

    // Create and display the account holder name
    const holderDiv = document.createElement("div");
    const holderLabel = document.createElement("label");
    holderLabel.textContent = "Full Name:";
    const holderSpan = document.createElement("span");
    holderSpan.textContent = item.accountHolder;
    holderDiv.appendChild(holderLabel);
    holderDiv.appendChild(holderSpan);
    accountInformation.appendChild(holderDiv);

    // Create and display the date of birth
    const dobDiv = document.createElement("div");
    const dobLabel = document.createElement("label");
    dobLabel.textContent = "Date of Birth:";
    const dobSpan = document.createElement("span");
    dobSpan.textContent = item.birthDay;
    dobDiv.appendChild(dobLabel);
    dobDiv.appendChild(dobSpan);
    accountInformation.appendChild(dobDiv);

    // Create and display the account number
    const accountDiv = document.createElement("div");
    const accountLabel = document.createElement("label");
    accountLabel.textContent = "Account Number:";
    const accountSpan = document.createElement("span");
    accountSpan.textContent = item.accountNumber;
    accountDiv.appendChild(accountLabel);
    accountDiv.appendChild(accountSpan);
    accountInformation.appendChild(accountDiv);

    // Create and display the sort code
    const sortDiv = document.createElement("div");
    const sortLabel = document.createElement("label");
    sortLabel.textContent = "Sort Code:";
    const sortSpan = document.createElement("span");
    sortSpan.textContent = item.sortCode;
    sortDiv.appendChild(sortLabel);
    sortDiv.appendChild(sortSpan);
    accountInformation.appendChild(sortDiv);

    // Create and display the account balance
    const balanceDiv = document.createElement("div");
    const balanceLabel = document.createElement("label");
    balanceLabel.textContent = "Balance:";
    const balanceSpan = document.createElement("span");
    balanceSpan.textContent = "";
    balanceDiv.appendChild(balanceLabel);
    balanceDiv.appendChild(balanceSpan);
    accountInformation.appendChild(balanceDiv);

    // Create the operation selection
    const operationDiv = document.createElement("div");
    const operationLabel = document.createElement("label");
    operationLabel.textContent = "Operation";
    const operationSelect = document.createElement("select");

    // Create the default operation option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select Operation";
    defaultOption.disabled = true;
    defaultOption.selected = true;

    // Create the deposit option
    const depositOption = document.createElement("option");
    depositOption.value = "deposit";
    depositOption.textContent = "Deposit";

    // Create the withdraw option
    const withdrawOption = document.createElement("option");
    withdrawOption.value = "withdraw";
    withdrawOption.textContent = "Withdraw";

    // Create the check balance option
    const checkBalanceOption = document.createElement("option");
    checkBalanceOption.value = "checkBalance";
    checkBalanceOption.textContent = "Check Balance";

    // Add operation options to the select element
    operationSelect.appendChild(defaultOption);
    operationSelect.appendChild(depositOption);
    operationSelect.appendChild(withdrawOption);
    operationSelect.appendChild(checkBalanceOption);
    operationDiv.appendChild(operationLabel);
    operationDiv.appendChild(operationSelect);
    accountInformation.appendChild(operationDiv);

    // Create the input for the operation amount
    const operationAmountDiv = document.createElement("div");
    const operationAmountLabel = document.createElement("label");
    operationAmountLabel.textContent = "Operation Amount:";
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

    // Enable or disable the amount input depending on the selected operation
    operationSelect.addEventListener("change", () => {
      operationAmountInput.value = "";
      if (
        operationSelect.value === "deposit" ||
        operationSelect.value === "withdraw"
      ) {
        operationAmountInput.disabled = false;
      } else {
        operationAmountInput.disabled = true;
        operationAmountInput.value = "";
      }
    });

    // Create the Action button
    const actionButton = document.createElement("button");
    actionButton.classList.add("action-button");
    actionButton.type = "button";
    actionButton.textContent = "Action";
    accountInformation.appendChild(actionButton);

    // Create the Delete Account button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("remove-button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete account";
    accountInformation.appendChild(deleteButton);

    // Handle the selected account operation
    actionButton.addEventListener("click", () => {
      const amount = Number(operationAmountInput.value);
      // Deposit money into the account
      if (operationSelect.value === "deposit") {
        const success = item.deposit(amount);
        if (success) {
          balanceSpan.textContent = `£${item.balance}`;
        }
        operationAmountInput.value = "";
      }
      // Withdraw money from the account
      else if (operationSelect.value === "withdraw") {
        const success = item.withdraw(amount);
        if (success) {
          balanceSpan.textContent = `£${item.balance}`;
        }
        operationAmountInput.value = "";
      }

      // Check the current account balance
      else if (operationSelect.value === "checkBalance") {
        item.checkBalance();
        balanceSpan.textContent = `£${item.balance}`;
      }
    });

    // Handle the Delete Account button
    deleteButton.addEventListener("click", () => {
      // Delete the selected account
      deleteAccount(
        item,
        accountsArray,
        fullName,
        dob,
        accountNumber,
        sortCode,
        accountInformation,
        refreshSelection
      );
    });
  });
}

// Export the displayAccountInformation function
export default displayAccountInformation;