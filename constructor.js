function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNo = Date.now(); 
}
const santuAC = new BankAccount('Santu Das', 1000);
console.log(santuAC);

setTimeout(function(){
    santuAC.balance =santuAC.balance-1000;
    console.log(santuAC)
}
 ,3000)
setTimeout(() => {
    const bikashAC = new BankAccount('Bikash Das', 2000);
    console.log(bikashAC);
}, 2000);