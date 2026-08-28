# Banking System

A simple banking system web application built with **HTML, CSS and JavaScript**.

The project demonstrates JavaScript **classes, modules, functions, arrays, DOM manipulation, event listeners and object-oriented programming**.

## Features

* Create a new bank account
* Generate a unique 8-digit account number
* Generate a unique 6-digit Sort Code
* Set minimum and maximum date of birth
* Store multiple bank accounts
* Search accounts by:

  * Full Name
  * Date of Birth
  * Account Number
  * Sort Code
* Display account information
* Deposit money
* Withdraw money
* Check account balance
* Delete a bank account
* Automatically refresh account selection lists

## Technologies

* HTML5
* CSS3
* JavaScript (ES6+)
* JavaScript Modules
* Object-Oriented Programming
* DOM Manipulation

## Project Structure

```text
Banking-System/
│
├── index.html
├── index.css
│
├── index.js
├── bankAccount.js
├── birthDate.js
├── newAccountNumber.js
├── newSortCode.js
├── refreshSelection.js
├── accountDisplay.js
└── deleteAccount.js
```

## JavaScript Modules

### `bankAccount.js`

Contains the `BankAccount` class.

The class is responsible for:

* Creating bank account objects
* Depositing money
* Withdrawing money
* Checking the account balance

### `newAccountNumber.js`

Generates a unique 8-digit account number.

The function uses `includes()` to check whether the generated number already exists.

### `newSortCode.js`

Generates a unique 6-digit Sort Code and formats it as:

```text
12-34-56
```

### `birthDate.js`

Sets the allowed date of birth range.

The customer must be at least 10 years old and no more than 100 years old.

### `refreshSelection.js`

Refreshes all account `<select>` elements after an account is created or deleted.

### `accountDisplay.js`

Displays account information and creates the controls for:

* Deposit
* Withdraw
* Check Balance
* Delete Account

### `deleteAccount.js`

Removes the selected account from the `accountsArray` and refreshes the account selection elements.

## Account Management

All created accounts are stored in an array:

```js
let accountsArray = [];
```

When a new account is created:

```js
accountsArray.push(account);
```

When an account is deleted:

```js
const index = accountsArray.indexOf(item);

accountsArray.splice(index, 1);
```

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/alkajuk-eng/Banking-System.git
```

2. Open the project in Visual Studio Code.

3. Open `index.html` in a browser.

For the best development experience, you can use the **Live Server** extension in Visual Studio Code.

## Learning Goals

This project was created as a practical JavaScript learning project.

The main goals are to practise:

* Classes and objects
* Constructors
* Methods
* ES6 modules
* `import` and `export`
* Arrays
* `filter()`
* `includes()`
* `indexOf()`
* `splice()`
* `forEach()`
* Arrow functions
* DOM manipulation
* Event listeners
* Form handling
* Dynamic HTML elements

## Future Improvements

Possible future improvements include:

* Add local storage
* Add transaction history
* Add account login
* Add account validation
* Improve error messages
* Add transfer functionality
* Add a transaction statement
* Improve responsive design

## Author

Created as a JavaScript learning project by **Igors Kozlovs**.

```
```
