function BankAccount(cardNumber, balance) {
    this.cardNumber = cardNumber;
    var _balance = balance;

    this.showBalance = function (pinCode) {
        if (pinCode !== "1234") {
            console.log("Wrong pin code.");
        } else {
            return _balance;
        }
      };

  this.changeBalance = function (pinCode, sum){
    if (pinCode !== "1234") {
            console.log("Wrong pin code.");
        } else {
        if (_balance > sum)
        { 
          _balance -= sum;
        }
          return _balance;
        }
    };
  }

var account = new BankAccount("1234432156433456", 1000);
console.log(account.cardNumber);
console.log(account._balance);
console.log(account.showBalance("1234"));
console.log(account.changeBalance("1234", 500));
console.log(account.changeBalance("1234", 5000));
