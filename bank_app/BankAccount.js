 class BankAccount{
    static accountNumbers = new Set();
    constructor(accountNumber, ownerName, balance) {

        if (BankAccount.accountNumbers.has(accountNumber)) {
            throw new Error("Account number must be unique");
        }

        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        BankAccount.accountNumbers.add(accountNumber);
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. Updated balance ${this.balance}`)
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.balance -= amount;
            console.log(`Withdraw ${amount} from account ${this.accountNumber}. Updated balance ${this.balance}`)
        }else{
            console.log("Insufficient funds");
        }
    }
    getBalance(){
        return this.balance;
    }
    displayAccountInfo(){
        const accountInfo=`
        Account Information :
        Account Number : ${this.accountNumber}
        Owner Name : ${this.ownerName}
        Current Balance : ${this.getBalance()}
        `;
        console.log(accountInfo)
    }
 }

 let accountOne=new BankAccount('1000', 'Anowar Hossain', 2500);
 accountOne.displayAccountInfo();
 accountOne.deposit(500);
 accountOne.withdraw(3000);

 /*create new account*/
 try {
     let accountTwo = new BankAccount("1001", "Abdul Malek", 20000);
     accountTwo.displayAccountInfo();
     accountTwo.deposit(10000);
     accountTwo.withdraw(15000);
} catch (error) {
    console.log(error.message);
}





