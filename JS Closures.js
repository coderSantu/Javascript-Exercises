function temp(){
    let count=0;
    return function(){
        count +=1;
    }
}
const add = temp();
add();
console.log(add());