// Q1... Difference between fxn declaration and fxn expression in terms of hoisting ?

// Fxn Declafration
// abcd()


function abcd(){
    console.log("Heyeyeye")
}


// Fxn Expression : It do not hoist ...it will give error
// abcde()


let abcde = function(){
    console.log("Heyeyeye")
}

// Q2. Reusable Discount Calculator 
function discCalculator(discount){
    return function(price){
        return price - price * (discount / 100);
    }
}
// let discount = discCalculator(10);
// console.log(discount(200));
let ten = discCalculator(10);
let twenty = discCalculator(20);

// console.log(ten(200));
// console.log(twenty(200));

// Q3. Counter using closure

function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count)
    }
}

let c = counter()
// c()
// c()
// c()
// c()

function bankAccount() {
    let balance = 0;
    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            balance -= amount;
        },
        getBalance() {
            return balance;
        }
    };
}

let account = bankAccount()
account.deposit(1000);
account.withdraw(500)

account.deposit(1000);
account.deposit(1000);
account.deposit(1000);

account.withdraw(500)
// console.log(account.getBalance());


// Function Factory 
function multiplyBy(num){
    return function(number){
        return number*num;
    }
}

let double = multiplyBy(2)
let triple = multiplyBy(3)

console.log(double(5));
console.log(triple(5))