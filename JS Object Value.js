const person = {
    name:"Santu",
    age:26,
    city: "Bardhaman"
};
const personArray = Object.values(person); //Build in array use of object.values()
    for(x of personArray){
        console.log(x);
    }