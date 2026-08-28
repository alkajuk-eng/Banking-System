// BankAccount class
class BankAccount {
  // Constructor creates a new bank account
  constructor(accountHolder, birthDay, accountNumber, sortCode, balance = 0) {
    this.accountHolder = accountHolder;
    this.birthDay = birthDay;
    this.accountNumber = accountNumber;
    this.sortCode = sortCode;
    this.balance = balance;
  }

  // Deposit method adds money to the account
  deposit(amount) {
    // Check that the deposit amount is not negative
    if (amount <= 0) {
      alert("Deposit amount must be greater than £0.");
      return false;
    } else {
      // Add the deposit amount to the current balance
      this.balance += amount;
      return true;
    }
  }

  // Withdrawal method removes money from the account
  withdraw(amount) {
    // Check that the withdrawal amount is greater than £0
    if (amount <= 0) {
      alert("Withdrawal amount must be greater than £0.");
      return false;
    }
    // Check if there is enough money in the account
    if (amount > this.balance) {
      alert(`Insufficient funds. Your balance is £${this.balance}.`);
      return false;
    }
    // Subtract the withdrawal amount from the current balance
    this.balance -= amount;
    return true;
  }

  // Check balance method displays the current account balance
  checkBalance() {
    console.log(`Your current account balance is £${this.balance}.`);
  }
}

// Export the BankAccount class as the default module
export default BankAccount;
