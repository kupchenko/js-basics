Array.prototype.removeAllStrs = function (str) {
    return this.filter(item => item !== str);
};

num = 5;
var num;

let array = ["1", "32", "15", "1", "5"];

console.log(array);
console.log(array.removeAllStrs("1"));

const user = {
    id: 1,
    username: "username",
    age: 21,
    money: 150,
    printBalanceWithRate: function (rate, commission = 0) {
        console.log("Total money with rate [" + rate + "] is " + (this.money * rate + commission));
    },
    printInfo: function () {
        console.group(this.username + " info");
        console.log("Id " + this.id);
        console.log("Username " + this.username);
        console.log("Age " + this.age);
        console.log("Money " + this.money);
        console.groupEnd()
    }
};

user.printBalanceWithRate(25);
user.printInfo();

const person = {
    id: 21,
    username: "dmitrii",
    age: 33,
    money: 500
};

user.printBalanceWithRate.bind(person, 25)();
user.printBalanceWithRate.bind(person)(25);
user.printBalanceWithRate.call(person, 25);
user.printBalanceWithRate.apply(person, [25, 10]);

user.printInfo.call(person);

//Custom bind

const printUserInfo = function (currentDate) {
    console.log(`User [${this.name}] ${this.age} year(s) old, today is ${currentDate}`)
};

const yuliia = Object.create({
    name: "yuliia",
    age: 24
});

//OOTB
printUserInfo.bind(yuliia)("21.03.1996");

const customBind = function (context, fn) {
    return function (...args) {
        return fn.apply(context, args)
    }
};

customBind(yuliia, printUserInfo)("29.09.1995");

yuliia.printInfo = function (...args) {
    return printUserInfo.bind(this)(args);
};

yuliia.printInfo("unknown");