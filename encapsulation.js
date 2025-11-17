class BankAccount {
  #balance; // Private property for balance

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.#balance = initialBalance;
  }

  // Setter
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Invalid withdrawal amount or insufficient funds.");
    }
  }

  // Getter
  getAccountBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(1000);
myAccount.balance;
myAccount.deposit(200); // Output: Deposited 200. New balance: 1200
myAccount.withdraw(500); // Output: Withdrew 500. New balance: 700
console.log(myAccount.getAccountBalance()); // Output: 700

// myAccount.#balance = 0; // Ini akan menyebabkan SyntaxError karena #balance adalah private