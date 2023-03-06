'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// DOM Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const createUserName = accs => {
  accs.forEach(acc => {
    acc.userName =  acc.owner
      .split(" ")
      .map(splittedName => splittedName.at(0))
      .join("")
      .toLowerCase();
  })
  
}
createUserName(accounts)

const displayMovements = (movements, sort = false) => {
    // removing existing element
    containerMovements.innerHTML = '';

    // Sorting
    const movs = sort ? movements.slice().sort((a, b) => a - b) :
    movements;

    movs.forEach((movement, index) => {
        const type = movement > 0 ? "deposit": "withdrawal";
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                <div class="movements__value">${movement}€</div>
            </div>`;

        // insertAdjacentHTML -> parses the specified text as html and inserts the resulting nodes into the DOM tree at a specified position
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
}

const calcDisplayBalance = function(account) {
    account.balance = account.movements.reduce((acc, cv) => acc += cv, 0);
    labelBalance.textContent = `${account.balance} €`;
};

const calcDisplaySummary = function(accounts) {
    const incomes = accounts.movements.filter(mov => mov > 0).reduce((acc, val) => acc+=val, 0);
    labelSumIn.textContent = `${incomes} €`;

    const outgoing = accounts.movements.filter(mov => mov < 0).reduce((acc, val) => acc += val, 0)
    labelSumOut.textContent = `${Math.abs(outgoing)} €`;

    const interest = accounts.movements.filter(mov => mov > 0).map(deposit => deposit * accounts.interestRate/100).filter((int, i, arr) => {
        console.log(arr);
        return int >= 1
    }).reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest} €`;
}

const updateAccountInfoInUI = function(accounts) {
// Display Movements
displayMovements(accounts.movements);
//console.log(containerMovements.innerHTML);

// Display balance
calcDisplayBalance(accounts);

// Display summary
calcDisplaySummary(accounts);
}

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', (e) => {
  // prevenet form from submitting
  e.preventDefault(); 

  currentAccount = accounts.find(account => account.userName === inputLoginUsername.value)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // To remove the focus
    inputLoginPin.blur();

    updateAccountInfoInUI(currentAccount);
  }
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value)
  inputLoanAmount.value = "";
  if (loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)) {
      currentAccount.movements.push(loanAmount);
      updateAccountInfoInUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(account => account.userName === inputTransferTo.value);
  // Clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  if (receiverAccount && 
    amount > 0 && 
    currentAccount.balance >= amount && 
    receiverAccount.userName !== currentAccount.userName){
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateAccountInfoInUI(currentAccount);
  }
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  if (currentAccount.userName === inputCloseUsername.value && 
      currentAccount.pin === Number(inputClosePin.value)) {
        accounts.splice(accounts.findIndex(acc => acc.userName === currentAccount.userName && acc.pin === currentAccount.pin));

        // Hiding UI
        containerApp.style.opacity = 0;
  }
  // Clear input fields
  inputCloseUsername.value = inputClosePin.value = '';
})

let sortStatus = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  sortStatus = !sortStatus;
  displayMovements(currentAccount.movements, sortStatus);
});

/////////////////////////////////////////////////
/*
// Practice:
// array.from method
labelBalance.addEventListener('click', function() {
  const transactionFetchedFromUI = Array.from(document.querySelectorAll('.movements__value'),
  el => Number(el.textContent.replace('€', ''))
  );
  // console.log(transactionFetchedFromUI.map(el => Number(el.textContent.replace('€', ''))));
  console.log(transactionFetchedFromUI);

  const transactionFetchedFromUI2 = [...document.querySelectorAll('.movements__value')]; // In this approach, we can apply map method directly (pipeline)
});
*/
/////////////////////////////////////////////////

