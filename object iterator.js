const number =[1,2,3];
const numberItr = number[Symbol.iterator]();
// understand of how work for(in) loop
console.log(numberItr.next());
console.log(numberItr.next());
console.log(numberItr.next());
console.log(numberItr.next());