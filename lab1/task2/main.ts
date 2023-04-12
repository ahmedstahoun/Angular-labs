abstract class Account {
  constructor(public acc_no: number, public balance: number) {}

  debitAmount() {}

  creditAmount() {}

  getBalance() {}
}

interface IAccount {
  Date_Of_Opening: string;
  addCustomer();
  removeCustomer();
}

class Current_Account extends Account implements IAccount {
  Date_Of_Opening: string;

  addCustomer() {}
  removeCustomer() {}
  constructor(acc_no, balance, public Interest_Rate: number) {
    super(acc_no, balance);
  }
}

class Saving_Account extends Account implements IAccount {
  Date_Of_Opening: string;
  addCustomer() {}
  removeCustomer() {}
  constructor(acc_no, balance, public Min_Balance: number) {
    super(acc_no, balance);
  }
}
