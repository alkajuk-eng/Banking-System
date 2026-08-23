// BankAccount class
class bankAccount {
  // Constructor creates a new bank account
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  // Deposit method adds money to the account
  deposit(amount) {
    // Check that the deposit amount is not negative
    if (amount < 0) {
      console.log("Deposit amount must be greater than £0.");
      return;
    } else {
      // Add the deposit amount to the current balance
      this.balance += amount;

      console.log(
        `You deposited £${amount}. Your current account balance is £${this.balance}.`
      );
    }
  }

  // Withdrawal method removes money from the account
  withdraw(amount) {
    // Check if there is enough money in the account
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    } else {
      // Subtract the withdrawal amount from the current balance
      this.balance -= amount;

      console.log(
        `You withdrew £${amount}. Your current account balance is £${this.balance}.`
      );
    }
  }

  // Check balance method displays the current account balance
  checkBalance() {
    console.log(`Your current account balance is £${this.balance}`);
  }
}

// Export the BankAccount class as the default module
export default bankAccount;
