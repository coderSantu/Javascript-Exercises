const person ={
    firstName : "Santu",
    lastName : "Das",
    age : 26,
    myDetails :function(){
                    return "My name is "+this.firstName+" "+this.lastName+" and I'm "+this.age+" old";
             }
};
console.log(person.myDetails);