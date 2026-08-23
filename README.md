# Banking System

A simple JavaScript Banking System project created to practise **classes, constructors, methods, objects, and ES modules**.

## About the Project

This project simulates basic banking operations using a `BankAccount` class.

Each bank account contains:

* Account number
* Account holder name
* Account balance

The project allows you to:

* Create new bank accounts
* Deposit money
* Withdraw money
* Check the current balance
* Display account information in the console

## Technologies Used

* HTML5
* JavaScript (ES6+)
* ES Modules

## Project Structure

```text
Simple Banking System/
│
├── index.html
├── index.js
├── bankAccount.js
└── README.md
```

## How It Works

The `bankAccount.js` file contains the `BankAccount` class with a constructor and three methods:

### Constructor

Creates a new bank account with an account number, account holder, and starting balance.

### `deposit()`

Adds money to the account balance.

### `withdraw()`

Removes money from the account if there are sufficient funds.

### `checkBalance()`

Displays the current account balance in the console.

## Example

Three bank accounts are created in `index.js`:

```js
const account1 = new bankAccount(127624, "John Doe", 100);
const account2 = new bankAccount(524679, "Anna Smith", 0);
const account3 = new bankAccount(435128, "Michael Johnson", 50);
```

The project then demonstrates depositing, withdrawing, and checking an account balance.

## How to Run

1. Clone or download the repository.
2. Open the project in VS Code.
3. Open `index.html` in a browser using a local development server such as **Live Server**.
4. Open the browser Developer Tools.
5. Go to the **Console** tab to see the results.

## Purpose

The main purpose of this project is to practise object-oriented programming concepts in JavaScript and understand how classes, constructors, methods, and ES modules work together.

## Author

Igors
