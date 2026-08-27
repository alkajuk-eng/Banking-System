function displayAccountInformation(result, accountInformation, deleteAccount) {

  accountInformation.innerHTML = "";

  result.forEach(item => {

    const holderDiv = document.createElement("div");
    const holderLabel = document.createElement("label");
    holderLabel.textContent = "Full Name:";
    const holderSpan = document.createElement("span");
    holderSpan.textContent = item.accountHolder;

    holderDiv.appendChild(holderLabel);
    holderDiv.appendChild(holderSpan);
    accountInformation.appendChild(holderDiv);


    const dobDiv = document.createElement("div");
    const dobLabel = document.createElement("label");
    dobLabel.textContent = "Date of Birth:";
    const dobSpan = document.createElement("span");
    dobSpan.textContent = item.birthDay;

    dobDiv.appendChild(dobLabel);
    dobDiv.appendChild(dobSpan);
    accountInformation.appendChild(dobDiv);


    const accountDiv = document.createElement("div");
    const accountLabel = document.createElement("label");
    accountLabel.textContent = "Account Number:";
    const accountSpan = document.createElement("span");
    accountSpan.textContent = item.accountNumber;

    accountDiv.appendChild(accountLabel);
    accountDiv.appendChild(accountSpan);
    accountInformation.appendChild(accountDiv);


    const sortDiv = document.createElement("div");
    const sortLabel = document.createElement("label");
    sortLabel.textContent = "Sort Code:";
    const sortSpan = document.createElement("span");
    sortSpan.textContent = item.sortCode;

    sortDiv.appendChild(sortLabel);
    sortDiv.appendChild(sortSpan);
    accountInformation.appendChild(sortDiv);


    const balanceDiv = document.createElement("div");
    const balanceLabel = document.createElement("label");
    balanceLabel.textContent = "Balance:";
    const balanceSpan = document.createElement("span");
    balanceSpan.textContent = "";

    balanceDiv.appendChild(balanceLabel);
    balanceDiv.appendChild(balanceSpan);
    accountInformation.appendChild(balanceDiv);


    const operationDiv = document.createElement("div");
    const operationLabel = document.createElement("label");
    operationLabel.textContent = "Operation";

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
    const actionButton = document.createElement("button");
    actionButton.classList.add("action-button");
    actionButton.type = "button";
    actionButton.textContent = "Action";
    accountInformation.appendChild(actionButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("remove-button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete account";
    accountInformation.appendChild(deleteButton);

    actionButton.addEventListener("click", () => {
      const amount = Number(operationAmountInput.value);
      if (operationSelect.value === "deposit") {
        const success = item.deposit(amount);
        if (success) {
          balanceSpan.textContent = `£${item.balance}`;
        }
        operationAmountInput.value = "";
      }
      else if (operationSelect.value === "withdraw") {
        const success = item.withdraw(amount);
        if (success) {
          balanceSpan.textContent = `£${item.balance}`;
        }
        operationAmountInput.value = "";
      }
      else if (operationSelect.value === "checkBalance") {
        item.checkBalance();
        balanceSpan.textContent = `£${item.balance}`;
      }
    });
  });
}

export default displayAccountInformation;