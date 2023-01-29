//contructor functions are used to create objects
//function without parameters
function f1(){
}

f1();//function calling with no arguments
//function with parameter
function f2(name,age){
    console.log(name);
}

f2("Sudha",30);//function calling with 2 arguments

class Person {
    constructor(name1, age1) {
        this.name = name1;
        this.age = age1;

        this.speak = function () {
            console.log(this.name + " is speaking");
        };
    }
}

var obj1 = new Person("Sudha1", 40);

console.log(obj1.name);
obj1.speak();


var obj2 = new Person("Sudha3", 20);
console.log(obj2.name)


class Account {
    constructor(balance, customerID, type) {
        this.balance = balance;
        this.customerID = customerID;
        this.type = type;

        this.deposit = function (amount) {
            this.balance = this.balance + amount;

        };

        this.withdraw = function (amount) {
            this.balance = this.balance - amount;

        };

        this.getBal = function () {
            console.log("Balance is: " + this.balance)
        };
    }
}

class SavingsAccount extends Account{
    constructor(roi){
        this.roi = roi;

        this.cal_interest = function (){
            //calculate interest
        }
    }
}

class DematAccount extends Account{

}

var account1 =  new Account(10000, 12534, "Savings");
account1.getBal();
account1.deposit(1500);
account1.getBal();
account1.withdraw(1500);
account1.getBal();