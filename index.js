// Import the BankAccount class
import bankAccount from "./bankAccount.js";

// Create new bank accounts
const account1 = new bankAccount(127624, "John Doe", 100);

const account2 = new bankAccount(524679, "Anna Smith", 0);

const account3 = new bankAccount(435128, "Michael Johnson", 50);



 // Display account2 information in the console
console.log(account2);

// Deposit £20 into account1
account1.deposit(20);

// Try to withdraw £30 from account2
account2.withdraw(30);

// Check the current balance of account2
account2.checkBalance(); 