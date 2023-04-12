class Account {
    constructor(acc_no, balance) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    debitAmount() { }
    creditAmount() { }
    getBalance() { }
}
class Current_Account extends Account {
    addCustomer() { }
    removeCustomer() { }
    constructor(acc_no, balance, Interest_Rate) {
        super(acc_no, balance);
        this.Interest_Rate = Interest_Rate;
    }
}
class Saving_Account extends Account {
    addCustomer() { }
    removeCustomer() { }
    constructor(acc_no, balance, Min_Balance) {
        super(acc_no, balance);
        this.Min_Balance = Min_Balance;
    }
}
