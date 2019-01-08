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
}
var account = new BankAccount("1234432156433456", "100500");
console.log(account.cardNumber);
console.log(account._balance);
console.log(account.showBalance("1234"));